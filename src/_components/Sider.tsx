import Logo from './Logo'

const Sider = ({
  isSidebarOpen,
  onClose,
}: {
  isSidebarOpen: boolean
  onClose: () => void
}) => {
  return (
    <div>
      <div className={`flex justify-end mb-4 md:hidden`}>
        <button onClick={onClose} className="text-white">
          ✕
        </button>
      </div>
      {isSidebarOpen ? <Logo /> : <></>}
      <nav>
        <ul>
          <li>준비중</li>
          <li>준비중</li>
          <li>준비중</li>
        </ul>
      </nav>
    </div>
  )
}

export default Sider
