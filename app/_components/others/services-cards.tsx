import type { ElementType } from "react"

interface ServicesCardsProps {
  icon: ElementType
  title: string
  description: string
}

const ServicesCards = ({
  icon: Icon,
  title,
  description,
}: ServicesCardsProps) => {
  return (
    <div className="rounded-2xl border-2 border-solid border-primaria/30 bg-black p-6 transition-all duration-300 hover:border-white hover:shadow-white_color">
      <div className="w-fit rounded-lg bg-terciaria p-2 text-3xl">
        <Icon />
      </div>
      <div className="mt-4">
        <span className="font-bold tracking-wide text-zinc-100">{title}</span>
        <p className="mt-1 text-sm leading-relaxed tracking-wide text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServicesCards
