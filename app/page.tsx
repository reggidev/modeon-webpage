import { CardServices } from "./_components/CardServices"
import MainTitle from "./_components/MainTitle"
import NavBar from "./_components/NavBar"

export default function Home() {
  return (
    <>
      <div className="inset-0 -z-10 h-full w-full items-center overflow-clip [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#DBFF00_100%)]">
        <NavBar />
        <main>
          <MainTitle />

          <div className="flex flex-col items-center justify-center">
            <h3 className="section-title">Serviços</h3>
            <p className="section-description">
              O que oferecemos para sua empresa...
            </p>

            <div>
              <CardServices />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
