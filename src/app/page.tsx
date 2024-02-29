import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {

	return (
		<main className="flex min-h-screen flex-col items-center gap-20 px-4 py-24 md:px-8">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight drop-shadow-md lg:text-5xl">
				Nextjs Masters Store
			</h1>
			<Button size="lg">
				<Link href='products'>
					See all products
				</Link>
			</Button>
		</main>
	);
}
