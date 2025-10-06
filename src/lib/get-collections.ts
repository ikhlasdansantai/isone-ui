import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

const PROJECT_ROOT = process.cwd();

const SNIPPETS_DIRECTORY = path.join(PROJECT_ROOT, "src/data/collections");
const COLLECTIONS_BASE_DIRECTORY = path.join(PROJECT_ROOT, "public/components");

export function getCollections() {
  const fileNames = fs.readdirSync(SNIPPETS_DIRECTORY);
  const mdxFiles = fileNames.filter((fileName) => fileName.endsWith(".mdx"));

  const snippets = mdxFiles.map((fileName) => {
    const name = fileName.replace(/\.mdx$/, "");
    const collectionFolderPath = path.join(COLLECTIONS_BASE_DIRECTORY, name);
    let collectionCount = 0;

    if (
      fs.existsSync(collectionFolderPath) &&
      fs.statSync(collectionFolderPath).isDirectory()
    ) {
      try {
        const fileCollections = fs.readdirSync(collectionFolderPath);

        const onlyFiles = fileCollections.filter((item) => {
          const itemPath = path.join(collectionFolderPath, item);
          return fs.statSync(itemPath).isFile() && !item.startsWith(".");
        });

        collectionCount = onlyFiles.length;
      } catch (error) {
        console.error(
          `Gagal membaca folder koleksi untuk ${name} di public:`,
          error,
        );
      }
    }

    const filePath = path.join(SNIPPETS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data: metadata } = matter(fileContents);

    return {
      // name: name,
      // fileName: fileName,
      metadata,
      collectionCount: collectionCount,
    };
  });

  return snippets;
}
