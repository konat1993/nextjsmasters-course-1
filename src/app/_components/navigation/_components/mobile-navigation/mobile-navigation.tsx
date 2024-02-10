'use client'

import React from "react";
import { MenuIcon } from "lucide-react";
import { MobileNavLinks } from "./_components";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useDrawerContext } from "@/contexts/drawer-context";

let i = 0

const MobileNavigation = () => {
  const { isOpen, openDrawer, closeDrawer } = useDrawerContext()

  const handleDrawerOpen = (openState: boolean) => {
    if (openState) {
      openDrawer()
    } else {
      closeDrawer()
    }
  }

  const handleViewport = React.useCallback(() => {
    const viewPortWidth = window.innerWidth
    console.log('first')
    if (viewPortWidth >= 768) {
      closeDrawer()
      i = 0
      window.removeEventListener("resize", handleViewport)
    }
  }, [closeDrawer])

  React.useEffect(() => {
    console.log('effect in')
    if (i === 0 && isOpen) {
      i++
      window.addEventListener("resize", handleViewport)
    }
  }, [handleViewport, isOpen])

  return (
    <Drawer onOpenChange={handleDrawerOpen} open={isOpen}>
      <DrawerTrigger>
        <MenuIcon className="w-8 h-8 cursor-pointer md:hidden" />
      </DrawerTrigger>
      <DrawerContent className="h-[85%] w-full md:hidden">
        <div className="p-8">
          <MobileNavLinks />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export { MobileNavigation };
