"use client"
import React, { useEffect, useState } from "react"
import "./toggle-button.css" // Importe o arquivo CSS

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    // Animação para quando a página carrega
    setTimeout(() => {
      setIsOn(true)
    }, 1000) // Atraso de 1 segundo para a animação
  }, [])

  return (
    <div className={`toggle-button ${isOn ? "on" : "off"}`}>
      <div className="slider" />
    </div>
  )
}

export default ToggleButton
