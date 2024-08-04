const Sider = ({ onClose }: { onClose: () => void }) => {
  return (
    <div>
      <div className={`flex justify-end mb-4 md:hidden`}>
        <button onClick={onClose} className="text-white">
          ✕
        </button>
      </div>
      <h2 className="text-xl font-bold">Sider</h2>
      <nav>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </nav>
    </div>
  )
}

export default Sider
