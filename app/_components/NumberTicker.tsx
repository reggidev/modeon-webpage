import NumberTickerClient from "./others/number-ticker-clients"
import NumberTickerProjects from "./others/number-ticker-projects"

const NumberTicker = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
      <div className="flex min-w-[350px] max-w-[350px] flex-col items-center justify-center rounded-xl border-[3px] border-solid border-black bg-[#000] py-5 text-white transition-all duration-300 hover:border-white hover:shadow-white_color">
        <NumberTickerClient />
        <p className="mt-2 text-2xl font-semibold uppercase">
          Clientes satisfeitos
        </p>
      </div>

      <div className="flex min-w-[350px] max-w-[350px] flex-col items-center justify-center rounded-xl border-[3px] border-solid border-black bg-[#000] py-5 text-white transition-all duration-300 hover:border-white hover:shadow-white_color">
        <NumberTickerProjects />
        <p className="mt-2 text-2xl font-semibold uppercase">
          Projetos entregues
        </p>
      </div>
    </div>
  )
}

export default NumberTicker
