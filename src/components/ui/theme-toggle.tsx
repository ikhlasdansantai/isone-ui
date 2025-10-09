"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <Button
      variant="default"
      className="rounded-md size-10 border !text-muted-foreground bg-transparent hover:!bg-transparent shadow-none dark:hover:opacity-65 cursor-pointer"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? (
        <Sun className="h-[1.5rem] w-[1.5rem]" />
      ) : (
        <Moon className="absolute h-[1.5rem] w-[1.5rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
