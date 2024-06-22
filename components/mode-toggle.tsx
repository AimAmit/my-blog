"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "./ui/toggle";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <Sun
        className="transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 h-[1.2rem] w-[1.2rem]"
        aria-label="light-theme-button"
      />
      <Moon
        className="absolute transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 h-[1.2rem] w-[1.2rem]"
        aria-label="dark-theme-button"
      />
    </Toggle>
  );
}
