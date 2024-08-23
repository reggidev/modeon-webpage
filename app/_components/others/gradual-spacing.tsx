"use client"
import GradualSpacing from "../magicui/gradual-spacing"
import ToggleButton from "./toggle-button"

export function GradualSpacingDemo() {
  return (
    /* TODO: WRAP GRADUALSPACING WITH COVER */
    <div className="flex items-center justify-center">
      <GradualSpacing
        className="text-[5rem] font-bold leading-none tracking-tighter text-terciaria md:text-[6rem]"
        text="MODE"
      />
      <div className="ml-6">
        <ToggleButton />
      </div>
    </div>
  )
}
