export function extractTextFromChildren(children: any): string {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }
  if (children && typeof children === "object" && children.props) {
    return extractTextFromChildren(children.props.children);
  }
  return "";
}
