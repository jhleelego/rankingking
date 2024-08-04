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
        className="md:hidden pl-2 text-black mb-1.5"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      {isSidebarOpen ? <></> : <Logo />}
      <div className="w-full">
        <iframe
          src="https://coupa.ng/cfV9RY"
          width="100%"
          height="36"
          referrerPolicy="unsafe-url"
        ></iframe>
      </div>
    </header>
  )
}

export default Header
