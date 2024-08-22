import { GradualSpacingDemo } from "./others/gradual-spacing"
import ToggleButton from "./others/toggle-button"
import { WordPullUpDemo } from "./others/word-pull-up"

const MainTitle = () => {
  return (
    <section className="-mt-20 flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <WordPullUpDemo />
        <GradualSpacingDemo />
        <ToggleButton />
      </div>
    </section>
  )
}

export default MainTitle
