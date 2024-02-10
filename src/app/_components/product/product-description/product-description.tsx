"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { type Item } from "@/types/products";
import { truncateText } from "@/lib/utils";

type Props = {
	description: Item["description"];
	truncateLength?: number;
	truncate?: boolean;
};

const ProductDescription = ({ description, truncate, truncateLength = 100 }: Props) => {
	const descriptionLength = description.length;

	const [isOpen, setIsOpen] = React.useState(false);

	const truncateDescription = React.useMemo(
		() => (text: string) => truncateText(text, truncateLength),
		[truncateLength],
	);

	const toggleExpander = () => {
		setIsOpen((prev) => !prev);
	};

	const renderExpander = () => {
		if (!isOpen && descriptionLength > truncateLength)
			return (
				<Button onClick={toggleExpander} variant="link" className="h-min p-0 font-bold">
					Read more
				</Button>
			);

		if (isOpen && descriptionLength > truncateLength) {
			return (
				<Button onClick={toggleExpander} variant="link" className="h-min p-0 font-bold">
					Less
				</Button>
			);
		}
	};

	return (
		<CardDescription>
			<span className="mr-2">
				{truncate && !isOpen ? truncateDescription(description) : description}
			</span>

			{truncate ? renderExpander() : null}
		</CardDescription>
	);
};

export { ProductDescription };
