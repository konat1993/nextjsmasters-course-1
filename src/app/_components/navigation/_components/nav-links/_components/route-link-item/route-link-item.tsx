"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
	path: string;
	name: string;
};

const RouteLinkItem = ({ path, name }: Props) => {
	const pathname = usePathname();
	return (
		<li>
			<Button
				variant="link"
				className={cn(
					"h-min rounded-md px-4 py-1 transition-colors duration-300 hover:bg-black hover:text-white hover:no-underline",
					pathname === path ? "bg-black  text-white" : "",
				)}
			>
				<Link href={path}>{name}</Link>
			</Button>
		</li>
	);
};

export { RouteLinkItem };
