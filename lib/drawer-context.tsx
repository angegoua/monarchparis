'use client'
import { createContext, useContext, useState } from 'react'

interface DrawerContext {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const DrawerContext = createContext<DrawerContext>({
  isOpen: false,
  setIsOpen: () => {},
})

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}
