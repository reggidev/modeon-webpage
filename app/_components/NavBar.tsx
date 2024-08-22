import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import Image from "next/image"

const navLinks = [
  {
    name: "serviços",
    href: "/servicos",
  },
  {
    name: "portfolio",
    href: "/portfolio",
  },
]

const NavBar = () => {
  return (
    <header className="sticky left-0 top-0 z-50 p-2">
      <div className="mx-auto flex max-w-2xl items-center justify-around rounded-full bg-darker_bg py-6 text-white shadow-lg lg:max-w-5xl">
        <div>
          <Image
            src="/ModeON-DBFF00.webp"
            alt="ModeON Logo"
            width={150}
            height={100}
          />
        </div>

        {/* DESKTOP NAVBAR */}
        <div className="hidden lg:flex">
          <ul className="-ml-3 flex items-center gap-6 text-base font-bold uppercase tracking-tight">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-white/60">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
            <li className="flex items-center hover:text-white/60"></li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-terciaria bg-[linear-gradient(110deg,#000103,45%,#DBFF00,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Contato
          </button>
        </div>

        {/* MOBILE NAVBAR */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="bg-terciaria text-black hover:bg-terciaria/50"
              >
                <MenuIcon size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-l-darker_bg bg-darker_bg text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="items-center gap-4">
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        className="w-full text-sm font-semibold uppercase tracking-tight hover:bg-lighter_bg/70 hover:text-white"
                        asChild
                      >
                        <a href={link.href} className="text-right">
                          {link.name}
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default NavBar
