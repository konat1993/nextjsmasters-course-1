import { RouteLinkItem } from "./_components";

const routes = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/about",
		name: "About",
	},
	{
		path: "/collections",
		name: "Collections",
	},
	{
		path: "/contact",
		name: "Contact",
	},
];

const NavLinks = () => {
	return (
		<ul className="flex w-full items-center justify-center gap-6">
			{routes.map((route) => (
				<RouteLinkItem key={route.path} name={route.name} path={route.path} />
			))}
		</ul>
	);
};

export { NavLinks };
