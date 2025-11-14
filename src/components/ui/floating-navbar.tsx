"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/30 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl shadow-2xl z-[5000] px-10 py-4 items-center justify-center space-x-8",
        "dark:from-black/20 dark:to-black/10 dark:border-white/30",
        "shadow-black/10 dark:shadow-white/5",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative text-white dark:text-white/90 items-center flex space-x-1 transition-all duration-300 hover:text-white dark:hover:text-white hover:scale-105"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm font-semibold tracking-wide">{navItem.name}</span>
        </a>
      ))}
    </motion.div>
  );
};