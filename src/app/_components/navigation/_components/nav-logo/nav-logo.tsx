"use client"

import NextImage from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLogo = () => {
	const pathname = usePathname();
	return (
		<Link href="/" className={cn(
			"h-full px-2 flex justify-center items-center transition-colors duration-500 hover:bg-black",
			pathname === "/" ? "bg-black hover:bg-white" : "",
		)}>
			<NextImage
				src="/nextjs.svg"
				alt="nextjs Logo"
				className={cn(
					"h-full transition-all duration-500 hover:scale-125 hover:invert",
					pathname === "/" ? "invert hover:invert-0" : "",
				)}
				width={100}
				height={24}
				priority
			/>
		</Link>
	);
};

export { NavLogo };
