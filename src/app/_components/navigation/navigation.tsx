import { NavLogo, NavLinks } from "./_components";

const Navigation = () => {
	return (
		<div className="sticky top-0 z-50 flex h-16 w-full overflow-hidden bg-background/95 px-8 shadow-md">
			<div className="flex w-full gap-4">
				<div className="w-32">
					<NavLogo />
				</div>
				<NavLinks />
				<div className="w-32" />
			</div>
		</div>
	);
};

export { Navigation };
