import Link from "next/link";

const NotFound = () => {
	return (
		<div className="mt-32 flex flex-col items-center justify-center gap-14">
			<h3 className="text-5xl">Not Ready Yet 😁</h3>
			<p className="text-xl">
				Back to{" "}
				<Link href="/" className="font-bold underline">
					home
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
