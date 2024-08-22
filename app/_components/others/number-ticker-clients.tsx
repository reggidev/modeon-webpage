import NumberTicker from "../magicui/number-ticker"

const NumberTickerClient = () => {
  return (
    <p className="whitespace-pre-wrap text-6xl font-bold tracking-tight text-white">
      +<NumberTicker value={1000} />
    </p>
  )
}

export default NumberTickerClient
