import { useState } from "react"

const useHeaderNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const onOpenMobileMenu = (isOpen: boolean) => {
    setMobileMenuOpen(isOpen)
  }
  return { mobileMenuOpen, onOpenMobileMenu }
}
export { useHeaderNavigation }
