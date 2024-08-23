"use client"
import { BsMagic } from "react-icons/bs"
import { HoverEffect } from "./ui/card-hover-effect"
import {
  MdOutlineDesignServices,
  MdOutlineSocialDistance,
} from "react-icons/md"
import { BiSolidTrafficCone } from "react-icons/bi"
import { SiPagespeedinsights, SiSimpleanalytics } from "react-icons/si"

export function ServiceInfo() {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={projects} />
    </div>
  )
}
export const projects = [
  {
    title: "Identidade Visual",
    description:
      "Criamos uma identidade visual única para destacar sua marca no mercado.",
    icon: BsMagic,
  },
  {
    title: "Gestão de Redes Sociais",
    description:
      "Cuidamos de suas redes sociais para engajar seu público e aumentar a presença online.",
    icon: MdOutlineSocialDistance,
  },
  {
    title: "Tráfego pago",
    description:
      "Maximizamos seu alcance com campanhas de tráfego pago eficientes e direcionadas",
    icon: BiSolidTrafficCone,
  },
  {
    title: "Design de Marca",
    description:
      "Transformamos ideias em uma marca visualmente forte e memorável.",
    icon: MdOutlineDesignServices,
  },
  {
    title: "Análise de Desempenho",
    description:
      "Monitoramos e otimizamos suas campanhas para garantir o melhor retorno sobre o investimento.",
    icon: SiSimpleanalytics,
  },
  {
    title: "Criação de Sites",
    description:
      "Desenvolvemos sites responsivos e otimizados para uma experiência de usuário excepcional.",
    icon: SiPagespeedinsights,
  },
]
