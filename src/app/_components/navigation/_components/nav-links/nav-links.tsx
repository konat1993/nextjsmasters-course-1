import { ActiveLink } from "@/shared-components";
import { routes } from "@/consts";



const NavLinks = () => {
	return (
		<ul className="hidden w-fit mx-auto items-center gap-6 md:flex">
			{routes.map((route) => (
				<ActiveLink key={route.path} name={route.name} path={route.path} />
			))}
		</ul>
	);
};

export { NavLinks };
