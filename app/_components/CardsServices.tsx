import { ServiceInfo } from "./ServiceInfo"
import NumberTicker from "./NumberTicker"

const CardServices = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h3 className="section-title">Serviços</h3>
      <p className="section-description">
        O que oferecemos para sua empresa...
      </p>

      <div>
        <ServiceInfo />
      </div>

      {/* NUMBER TICKER */}
      <NumberTicker />
    </div>
  )
}

export default CardServices
