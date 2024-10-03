import React from 'react'
import Container from '../Container/container'
import { linksMenu } from '@/utils/data'
import NavLinks from './NavLinks'
import Button from '../Button'

interface AsideMenuProps {
  isOpen: boolean
  closeMenu: () => void
}

export default function AsideMenu({ isOpen, closeMenu }: AsideMenuProps) {
  return (
    <aside
      className={`top-23 fixed bottom-0 z-50 h-full w-full overflow-y-auto bg-white duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'} @laptop:hidden transition-all ease-in`}
      aria-hidden={!isOpen}
    >
      <Container className="flex h-screen items-center justify-center py-10">
        <nav className="flex flex-col items-center justify-between gap-12">
          <ul className="flex flex-col items-center gap-4">
            {linksMenu.map(item => (
              <li key={item.label}>
                <NavLinks
                  onClick={closeMenu}
                  className="text-2xl"
                  href={item.url}
                >
                  {item.label}
                </NavLinks>
              </li>
            ))}
          </ul>

          <Button onClick={closeMenu} href="/contato" variant="primary">
            Entre em contato
          </Button>
        </nav>
      </Container>
    </aside>
  )
}
