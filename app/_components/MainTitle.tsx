"use client"
import WordPullUp from "./magicui/word-pull-up"
import GradualSpacing from "./magicui/gradual-spacing"
import { useEffect, useState } from "react"
import "./styles/toggle-button.css"
import { RiArrowDownSLine } from "react-icons/ri"

const MainTitle = () => {
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    // Animação para quando a página carrega
    setTimeout(() => {
      setIsOn(true)
    }, 1200) // Atraso da animação
  }, [])

  return (
    <section className="-mt-20 flex min-h-screen items-center justify-center">
      <div className="backdrop-blur-s flex flex-col items-center justify-center">
        {/* WORD PULL UP */}
        <WordPullUp
          className="text-2xl font-semibold uppercase tracking-tight text-white md:text-4xl"
          words="Sua marca"
        />

        <div className="flex flex-col items-center break_togglebutton:flex-row">
          {/* GRADUAL SPACING */}
          <div className="flex items-center justify-center">
            <GradualSpacing
              className="text-[5rem] font-bold leading-none tracking-tighter text-terciaria md:text-[6rem]"
              text="MODE"
            />
          </div>
          <div className="ml-6">
            {/* TOGGLE BUTTON MODE(ON) */}
            <div className={`toggle-button ${isOn ? "on" : "off"}`}>
              <div className="slider bg-gradient-to-r from-[#bbe534] to-[#a6cb2c]" />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-4 flex justify-center">
            <RiArrowDownSLine className="animate-bounce text-5xl text-terciaria" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainTitle
