import NumberTickerClient from "./others/number-ticker-clients"
import NumberTickerProjects from "./others/number-ticker-projects"

const NumberTicker = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
      <div className="flex min-w-[350px] max-w-[350px] flex-col items-center justify-center rounded-xl border-[3px] border-solid border-black bg-black py-5 text-white transition-all duration-300 hover:border-white hover:shadow-white_color">
        <NumberTickerClient />
        <p className="mt-2 text-xl font-semibold uppercase text-zinc-400 md:text-2xl">
          Clientes satisfeitos
        </p>
      </div>

      <div className="flex min-w-[350px] max-w-[350px] flex-col items-center justify-center rounded-xl border-[3px] border-solid border-black bg-black py-5 text-white transition-all duration-300 hover:border-white hover:shadow-white_color">
        <NumberTickerProjects />
        <p className="mt-2 text-xl font-semibold uppercase text-zinc-400 md:text-2xl">
          Projetos entregues
        </p>
      </div>
    </div>
  )
}

export default NumberTicker
