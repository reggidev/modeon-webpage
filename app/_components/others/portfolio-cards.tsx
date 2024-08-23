"use client"

import Image from "next/image"
import React from "react"
import { CardBody, CardContainer, CardItem } from "../ui/3d-card"

interface PortfolioCardsProps {
  title: string
  description: string
  imageUrl: string
  projectLink: string
}

export function PortfolioCards({
  title,
  description,
  imageUrl,
  projectLink,
}: PortfolioCardsProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-black p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-white"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-4 flex items-center justify-end">
          <CardItem
            translateZ={20}
            as="a"
            href={projectLink}
            className="rounded-xl bg-terciaria px-4 py-2 text-xs font-bold text-black"
          >
            Ver mais
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
