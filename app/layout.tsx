import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"
import Footer from "./_components/Footer"
import NavBar from "./_components/NavBar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agência de Marketing Digital para ISP's - Agencia Mode On",
  description:
    "Uma agência de marketing, performance e conteúdo para Provedores de Internet que buscam se destacar no mercado, gerar valor, vender mais e serem lembrados em primeiro lugar.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="inset-0 -z-10 h-full w-full items-center overflow-clip [background:radial-gradient(125%_65%_at_50%_10%,#000_40%,#DBFF00_100%)]">
          <NavBar />
          <main>{children}</main>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  )
}
