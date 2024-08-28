import React, { Suspense } from "react"

const MainTitle = React.lazy(() => import("./_components/MainTitle"))
const Services = React.lazy(() => import("./_components/Services"))
const ScrollingLogo = React.lazy(() => import("./_components/ScrollingLogo"))
const PortfolioSection = React.lazy(
  () => import("./_components/PortfolioSection"),
)
const ContactCta = React.lazy(() => import("./_components/ContactCta"))

export default function Home() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <MainTitle />
      <Services />
      <ScrollingLogo />
      <PortfolioSection />
      <ContactCta />
    </Suspense>
  )
}
