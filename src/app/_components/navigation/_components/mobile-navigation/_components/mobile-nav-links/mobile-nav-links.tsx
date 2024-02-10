"use client"

import { ActiveLink } from "@/shared-components";
import { routes } from "@/consts";
import { useDrawerContext } from "@/contexts/drawer-context";

const MobileNavLinks = () => {
  const { closeDrawer } = useDrawerContext()
  return (
    <ul className="w-min mx-auto space-y-3 md:hidden">
      {routes.map((route) => (
        <ActiveLink
          key={route.path}
          name={route.name}
          path={route.path}
          onClick={() => closeDrawer()}
        />
      ))}
    </ul>
  );
};

export { MobileNavLinks };
