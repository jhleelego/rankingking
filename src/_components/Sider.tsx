import Logo from './Logo'

const Sider = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div className={`flex items-center justify-between px-2 h-[48px] `}>
        <Logo />
        <button onClick={onClose} className="text-gray-500">
          ✕
        </button>
      </div>
      <nav className="p-4 text-black">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </nav>
    </div>
  )
}

export default Sider
