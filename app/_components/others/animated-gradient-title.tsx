import { cn } from "@/app/_lib/utils"
import AnimatedGradientText from "../magicui/animated-gradient-text"

interface AnimatedGradientTitleProps {
  text: string
}

export function AnimatedGradientTitle({ text }: AnimatedGradientTitleProps) {
  return (
    <div className="z-10 flex min-h-2 items-center justify-center">
      <AnimatedGradientText>
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#DBFF00] via-[#ffffff] to-[#DBFF00] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          {text}
        </span>
      </AnimatedGradientText>
    </div>
  )
}
