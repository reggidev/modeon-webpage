import CardServices from "./_components/CardsServices"
import { Contato } from "./_components/Contato"
import Footer from "./_components/Footer"
import MainTitle from "./_components/MainTitle"
import NavBar from "./_components/NavBar"

export default function Home() {
  return (
    <>
      <div className="inset-0 -z-10 h-full w-full items-center overflow-clip [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#DBFF00_100%)]">
        <NavBar />
        <main>
          <MainTitle />
          <CardServices />
          <Contato />
        </main>
        <Footer />
      </div>
    </>
  )
}
