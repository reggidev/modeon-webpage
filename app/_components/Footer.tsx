import Image from "next/image"

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-center gap-y-4 rounded-t-[50px] bg-black py-10 text-white">
        <div>
          <Image
            src="/ModeON-DBFF00.webp"
            alt="ModeON Logo"
            width={200}
            height={100}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 font-semibold text-zinc-200">
          <p>Serviços</p>
          <p>Portfolio</p>
          <p>Contato</p>
        </div>
      </footer>

      <footer className="flex h-auto w-full flex-col items-center justify-center bg-white p-1 text-center font-semibold text-black">
        <p className="pb-1 text-sm text-black">
          <a
            href="https://reggidev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold tracking-wide text-black hover:underline"
          >
            Reggi Dev
          </a>{" "}
          | &copy; 2024, Todos os direitos reservados
        </p>
      </footer>
    </>
  )
}

export default Footer
