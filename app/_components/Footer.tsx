import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <footer className="pt-10">
        <div className="flex flex-col items-center justify-center gap-y-4 rounded-t-[50px] bg-black py-16 text-white">
          <div>
            <Image
              src="/modeon_logo_verde.webp"
              alt="ModeON Logo"
              width={250}
              height={100}
              className="h-auto w-auto"
              priority
            />
          </div>
          <div className="mt-4 flex items-center justify-center text-base font-semibold text-zinc-200">
            <a href="#servicos" className="px-4">
              Serviços
            </a>
            <a
              href="#portfolio"
              className="border-l border-solid border-zinc-400 px-4"
            >
              Portfolio
            </a>
            <Link
              href="/contato"
              className="border-l border-solid border-zinc-400 px-4"
            >
              Contato
            </Link>
          </div>
        </div>
      </footer>

      <footer className="flex h-auto w-full flex-col items-center justify-center bg-terciaria p-1 text-center font-semibold text-black">
        <p className="pb-1 text-sm text-black">
          Desenvolvido por{" "}
          <a
            href="https://reggidev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold tracking-wide text-black hover:underline"
          >
            Reggi Dev
          </a>{" "}
          | &copy; 2024 ModeON. Todos os direitos reservados.
        </p>
      </footer>
    </>
  )
}

export default Footer
