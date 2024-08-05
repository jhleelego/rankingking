import Logo from './Logo'

const Header = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}) => {
  return (
    <header className="h-12 text-white px-2 flex justify-between items-center bg-white gap-1.5">
      <button
        className="text-[24px] text-gray-500 flex-col items-center justify-center mb-1.5"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <Logo />
      <span className="text-[20px] text-black font-bold mb-1 text-blue-500">
        x
      </span>
      <div className="w-full">
        <iframe
          src="https://coupa.ng/cfV9RY"
          width="100%"
          height="36"
          referrerPolicy="unsafe-url"
        ></iframe>
        {/* <iframe
          src="https://coupa.ng/cfV9RW"
          width="100%"
          height="44"
          referrerPolicy="unsafe-url"
        ></iframe> */}
      </div>
    </header>
  )
}

export default Header
