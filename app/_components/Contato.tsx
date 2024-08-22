import Meteors from "./magicui/meteors"

export function Contato() {
  return (
    <section className="py-10">
      <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-black md:mx-auto md:w-[650px] md:rounded-xl md:shadow-xl lg:w-[940px]">
        <Meteors number={30} />
        <span className="section-title pointer-events-none max-w-[400px] whitespace-pre-wrap text-3xl leading-none md:text-4xl">
          Vamos conversar sobre o seu projeto
        </span>
        <p className="section-description mt-1 max-w-[550px]">
          Entre em contato conosco hoje para saber mais sobre como nossos
          serviços de marketing digital podem ajudar seu negócio a crescer e ter
          sucesso online
        </p>
        <button className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-terciaria bg-[linear-gradient(110deg,#000103,45%,#DBFF00,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Entrar em contato
        </button>
      </div>
    </section>
  )
}
