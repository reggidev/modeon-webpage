import Image from "next/image"

const Footer = () => {
  return (
    <>
      <footer className="pt-10">
        <div className="flex flex-col items-center justify-center gap-y-4 rounded-t-[50px] bg-black py-16 text-white">
          <div>
            <Image
              src="/ModeON-DBFF00.webp"
              alt="ModeON Logo"
              width={350}
              height={100}
            />
          </div>
          <div className="mt-4 flex items-center justify-center text-base font-semibold text-zinc-200">
            <a className="px-4">Serviços</a>
            <a className="border-l border-solid border-zinc-400 px-4">
              Portfolio
            </a>
            <a className="border-l border-solid border-zinc-400 px-4">
              Contato
            </a>
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
