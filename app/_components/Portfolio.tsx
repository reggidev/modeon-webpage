import { AnimatedGradientTitle } from "./others/animated-gradient-title"
import { PortfolioCards } from "./others/portfolio-cards"

const Portfolio = () => {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center justify-center py-10">
      <AnimatedGradientTitle text="Portfolio" />
      <p className="section-description">
        Nossos ultimos trabalhos entregues...
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-5">
        <PortfolioCards
          title="Projeto 01"
          description="Breve descrição do projeto 01"
          imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectLink="https://www.google.com"
        />

        <PortfolioCards
          title="Projeto 02"
          description="Breve descrição do projeto 02"
          imageUrl="https://images.unsplash.com/photo-1724368202141-ef6f3522f50f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectLink="https://www.google.com"
        />

        <PortfolioCards
          title="Projeto 03"
          description="Breve descrição do projeto 03"
          imageUrl="https://images.unsplash.com/photo-1724217552369-22b256e395d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectLink="https://www.google.com"
        />

        <PortfolioCards
          title="Projeto 04"
          description="Breve descrição do projeto 04"
          imageUrl="https://images.unsplash.com/photo-1498612753354-772a30629934?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          projectLink="https://www.google.com"
        />
      </div>
    </section>
  )
}

export default Portfolio
