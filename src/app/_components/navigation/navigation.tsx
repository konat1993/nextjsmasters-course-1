import { NavLogo, NavLinks, MobileNavigation } from "./_components";
import { DrawerContextProvider } from "@/contexts";

const Navigation = () => {
	return (
		<div className="sticky top-0 z-50 flex h-16 w-full overflow-hidden bg-background/95 px-8 shadow-md">
			<div className="flex w-full gap-4">
				<div className="w-32">
					<NavLogo />
				</div>
				<NavLinks />
				<div className="w-32"></div>
				<div className="ml-auto flex items-center justify-end h-full md:hidden">
					<DrawerContextProvider>
						<MobileNavigation />
					</DrawerContextProvider>
				</div>
			</div>
		</div>
	);
};

export { Navigation };
