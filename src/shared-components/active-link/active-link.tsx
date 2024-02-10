"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  name: string;
  path: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const ActiveLink = ({ name, path, onClick }: Props) => {
  const pathname = usePathname();

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full h-min rounded-md px-4 py-1 transition-colors duration-300 hover:bg-black hover:text-white",
        pathname === path ? "bg-black  text-white" : "",
      )}
      asChild
      onClick={onClick}
    >
      <Link href={path}>{name}</Link>
    </Button>
  );
};

export { ActiveLink };
