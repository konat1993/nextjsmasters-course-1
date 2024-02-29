import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/app/_components";

const poppins = Poppins({
	weight: ["400"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Next JS Masters",
	description: "E-commerce website built with Next.js",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
