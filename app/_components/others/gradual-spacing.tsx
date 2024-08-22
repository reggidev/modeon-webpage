"use client"
import GradualSpacing from "../magicui/gradual-spacing"
import { Cover } from "../ui/cover"

export function GradualSpacingDemo() {
  return (
    <Cover>
      <GradualSpacing
        className="mb-4 text-[5rem] font-bold leading-none tracking-tight text-terciaria md:text-[8rem]"
        text="ModeON"
      />
    </Cover>
  )
}
