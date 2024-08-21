import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-sans text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-700 dark:bg-gray-800/50 dark:text-gray-100 lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4 lg:bg-gray-100 lg:dark:bg-gray-900/50"> */}

        Asistente Buscador&nbsp;
        <code className="font-sans font-bold">- PANEL DE EXPERTOS ELÉCTRICOS</code>
      </p>
      <div className="fixed bottom-0 left-0 mb-4 flex h-auto w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-auto lg:bg-none lg:mb-0">
        <a
          href="https://www.codevsys.cl/"
          className="flex items-center justify-center font-nunito text-sm font-bold gap-2"
        >
          <span>Built by Codevsys Spa.</span>
          <Image
            className="rounded-xl"
            src="/logo-codevsys.png"
            alt="Logo Codevsys"
            width={100}
            height={100}
            priority
          />
        </a>
      </div>
    </div>
  );
}

// <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] dark:from-[#343a40] dark:to-[#212529] lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-gray-200 lg:dark:bg-zinc-800/30">
// bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] dark:from-[#343a40] dark:to-[#212529]
// <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-[#ffe066] to-[#ffa94d] dark:from-[#5f3dc4] dark:to-[#364fc7] lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-gray-200 lg:dark:bg-zinc-800/30"></p>
// bg-gradient-to-b from-[#ffe066] to-[#ffa94d] dark:from-[#5f3dc4] dark:to-[#364fc7]
// <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-[#d0ebff] to-[#adb5bd] dark:from-[#003366] dark:to-[#2b2b2b] lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-gray-200 lg:dark:bg-zinc-800/30"></p>
// bg-gradient-to-b from-[#d0ebff] to-[#adb5bd] dark:from-[#003366] dark:to-[#2b2b2b]
// <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-[#b2f2bb] to-[#a5d8ff] dark:from-[#0ca678] dark:to-[#099268] lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-gray-200 lg:dark:bg-zinc-800/30"></p>
// bg-gradient-to-b from-[#b2f2bb] to-[#a5d8ff] dark:from-[#0ca678] dark:to-[#099268]
// <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-[#f0e5d8] to-[#d1ccc0] dark:from-[#6f4e37] dark:to-[#3e2723] lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-gray-200 lg:dark:bg-zinc-800/30"></p>
// bg-gradient-to-b from-[#f0e5d8] to-[#d1ccc0] dark:from-[#6f4e37] dark:to-[#3e2723]


