import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function truncateText(text: string, truncateLength: number) {
	if (text.length > truncateLength) {
		return text.slice(0, truncateLength) + "...";
	}
	return text;
}

export function formatCurrency(amount: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount / 100);
}
