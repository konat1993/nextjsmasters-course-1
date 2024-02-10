"use client"

import React from "react";

type DrawerContextProps = {
  isOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

const DrawerContext = React.createContext<DrawerContextProps | null>(null)

const DrawerContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const closeDrawer = () => {
    setIsOpen(false)
  }

  const openDrawer = () => {
    setIsOpen(true)
  }

  const contextValues = {
    isOpen,
    openDrawer,
    closeDrawer,
  }

  return (
    <DrawerContext.Provider value={contextValues}>
      {children}
    </DrawerContext.Provider>
  );
};

const useDrawerContext = () => {
  const context = React.useContext(DrawerContext)
  if (!context) {
    throw new Error("useDrawerContext must be used within a DrawerContextProvider")
  }
  return context
}

export { DrawerContextProvider, useDrawerContext };
