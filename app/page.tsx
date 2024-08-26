import { ContactCta } from "./_components/ContactCta"
import MainTitle from "./_components/MainTitle"
import PortfolioSection from "./_components/PortfolioSection"
import { ScrollingLogo } from "./_components/ScrollingLogo"
import Services from "./_components/Services"

export default function Home() {
  return (
    <main>
      <MainTitle />
      <Services />
      <ScrollingLogo />
      <PortfolioSection />
      <ContactCta />
    </main>
  )
}
