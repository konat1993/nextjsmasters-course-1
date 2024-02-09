import Image from "next/image";
import Link from "next/link";

const NavLogo = () => {
	return (
		<Link href="/" className="block h-full px-2 transition-colors duration-500 hover:bg-black">
			<Image
				src="/nextjs.svg"
				alt="nextjs Logo"
				className="h-full transition-all duration-500 hover:scale-125 hover:invert"
				width={100}
				height={24}
				priority
			/>
		</Link>
	);
};

export { NavLogo };
