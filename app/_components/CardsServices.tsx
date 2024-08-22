import { ServiceInfo } from "./ServiceInfo"

const CardServices = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="section-title">Serviços</h3>
      <p className="section-description">
        O que oferecemos para sua empresa...
      </p>

      <div>
        <ServiceInfo />
      </div>
    </div>
  )
}

export default CardServices
