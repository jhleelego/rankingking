import Link from 'next/link'

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="h-12 text-white px-2 flex justify-between items-center bg-white gap-1.5">
      <button
        className="md:hidden pl-2 text-black mb-1.5"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      {/* <a href="http://127.0.0.1:3000">
        <h1 className="font-bold text-black whitespace-nowrap">
          <span className="text-yellow-500 text-lg">👑</span>
          &nbsp;
          <span className=" text-red-600">랭</span>
          <span className=" text-yellow-500">킹</span>
          <span className=" text-blue-500">킹</span>
        </h1>
      </a>
      <div className="w-full">
        <iframe
          src="https://coupa.ng/cfV9RY"
          width="100%"
          height="36"
          referrerPolicy="unsafe-url"
        ></iframe>
      </div> */}
      <Link href={process.env.NEXT_PUBLIC_M_URL || ''} className="mb-1">
        <h1 className="font-bold text-black whitespace-nowrap">
          <span className="text-[22px] italic text-red-600">랭</span>
          <span className="text-[22px] italic text-yellow-500">킹</span>
          <span className="text-[22px] italic text-blue-500">킹</span>
        </h1>
      </Link>
      <span className="text-black font-bold mb-1.5 text-blue-500">x</span>
      <div className="w-full">
        <iframe
          src="https://coupa.ng/cfV9RW"
          width="100%"
          height="44"
          referrerPolicy="unsafe-url"
        ></iframe>
      </div>
    </header>
  )
}

export default Header
