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
import Link from "next/link"

const navLinks = [
  {
    name: "serviços",
    href: "/servicos",
  },
  {
    name: "portfolio",
    href: "/portfolio",
  },
  {
    name: "sobre",
    href: "#",
  },
]

const NavBar = () => {
  return (
    <header className="sticky left-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-3xl bg-darker_bg px-8 py-4 text-zinc-300">
        <div>
          <Link href="/">
            <Image
              src="/ModeON-DBFF00.webp"
              alt="ModeON Logo"
              width={150}
              height={100}
            />
          </Link>
        </div>

        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-6 text-base font-bold uppercase tracking-tight">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-terciaria/80">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex">
          <Link href="/contato">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-terciaria bg-[linear-gradient(110deg,#000103,45%,#DBFF00,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Contato
            </button>
          </Link>
        </div>

        {/* MOBILE NAVBAR */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="bg-terciaria text-black hover:bg-terciaria/50"
              >
                <span className="sr-only">Abrir menu de navegação</span>
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
                        variant="outline"
                        className="w-full text-sm font-semibold uppercase tracking-tight hover:bg-terciaria hover:text-black"
                        asChild
                      >
                        <a href={link.href} className="text-right">
                          {link.name}
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                ))}
                <Link href="/contato">
                  <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-terciaria bg-[linear-gradient(110deg,#000103,45%,#DBFF00,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Contato
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default NavBar
