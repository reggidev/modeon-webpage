import { Input } from "../_components/ui/input"
import { Label } from "../_components/ui/label"
import { Textarea } from "../_components/ui/textarea"

export default function Contato() {
  return (
    <section className="py-10 text-white">
      <form className="mx-auto grid w-full max-w-3xl grid-cols-2 items-center gap-1.5">
        <div>
          <Label htmlFor="nome">Email</Label>
          <Input
            type="text"
            id="nome"
            placeholder="Insira seu nome completo"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="agencia@modeon.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="fone">Fone</Label>
          <Input type="tel" id="Fone" placeholder="(xx) xxxxx-xxxx" required />
        </div>

        <div>
          <Label htmlFor="empresa">Empresa</Label>
          <Input
            type="text"
            id="empresa"
            placeholder="Insira o nome da sua empresa"
            required
          />
        </div>

        <div className="col-span-2">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            required
          />
        </div>
      </form>
    </section>
  )
}
