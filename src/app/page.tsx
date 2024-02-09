import ProductList from "@/app/_components/product-list/product-list";
import { type Item } from "@/types/products";

const items: Item[] = [
	{
		id: 1,
		slug: "nextjs-masters-t-shirt",
		name: "Nextjs Masters T-Shirt",
		description:
			"A Nextjs Masters original T-shirt with the logo of the group. Show your support for the Nextjs Masters community by wearing this T-shirt.",
		price: 3400,
		image: "/nextjs-t-shirt.webp",
	},
	{
		id: 2,
		slug: "nextjsmasters-cap-2",
		name: "NxT Masters Cap",
		description:
			"A Nextjs Masters original Cap with the logo of the group. Show your support for the Nextjs Masters community by wearing this Cap.",
		price: 1300,
		image: "/nextjsmasters-cap-2.webp",
	},
	{
		id: 3,
		slug: "sweater",
		name: "Sweater",
		description:
			"A sweater, also called a jumper in British English, is a piece of clothing, typically with long sleeves, made of knitted or crocheted material that covers the upper part of the body.",
		price: 4000,
		image: "/sweater.webp",
	},
	{
		id: 4,
		slug: "nextjsmasters-cap",
		name: "NjsM Cap",
		description:
			"A Nextjs Masters Cap with the logo of the group. Show your support for the Nextjs Masters community by wearing this Cap.",
		price: 1000,
		image: "/nextjsmasters-cap.webp",
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-20 px-4 py-24 md:px-8">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight drop-shadow-md lg:text-5xl">
				Nextjs Masters Store
			</h1>
			<ProductList items={items} />
		</main>
	);
}
