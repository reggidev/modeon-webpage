import { VelocityScroll } from "./magicui/scroll-based-velocity"

export function ScrollingLogo() {
  return (
    <section className="py-4">
      <VelocityScroll
        text="ModeON Marketing Digital"
        default_velocity={3}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-terciaria drop-shadow-sm md:text-7xl md:leading-[5rem]"
      />
    </section>
  )
}
