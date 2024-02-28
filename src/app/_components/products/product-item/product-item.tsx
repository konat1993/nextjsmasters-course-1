"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductDescription } from "../product-description";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { type Item } from "@/types/products";
import { type ProductGetListQuery } from "@/gql/graphql";
// import { formatCurrency } from "@/lib/utils";

type Props = {
	item: ProductGetListQuery["products"]["data"][number];
};

const ProductItem = ({ item }: Props) => {
	return (
		<Card className="flex w-full min-w-[200px] max-w-[320px] justify-center py-2 shadow-lg">
			<CardContent className="px-2">
				<Link href={`products/${item.slug}`}>
					<div className="mb-6 overflow-hidden">
						<Image
							src={item.image}
							width={150}
							height={150}
							alt={item.name}
							className="w-full cursor-pointer rounded-md object-contain transition-transform duration-500 hover:scale-110"
						/>
					</div>
				</Link>
				<div className="mb-2 flex items-center justify-between gap-6">
					<CardTitle>{item.name}</CardTitle>
					{/* UNCOMMENT THIS <span className="text-xl font-bold">{formatCurrency(item.price)}</span> */}
				</div>
				<ProductDescription truncate description={item.description} truncateLength={140} />
			</CardContent>
		</Card>
	);
};

export { ProductItem };
