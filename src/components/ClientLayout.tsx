'use client'

import { useState, useEffect } from 'react'
import Sider from '@/components/Sider'
import Header from '@/components/Header'

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth < 1000 ? false : true,
  )

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen flex">
      <div
        className={`fixed z-40 inset-0 bg-black opacity-50 ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:hidden`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed z-50 h-screen bg-gray-800 text-white p-4 transition-transform transform min-w-[240px] max-w-[240px] ${
          isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full '
        } md:relative md:translate-x-0 md:w-1/4`}
      >
        <Sider onClose={toggleSidebar} />
      </div>

      <div
        className={`flex-1 flex flex-col transition-margin duration-300  ${
          isSidebarOpen ? 'md:ml-1/4' : 'md:ml-0'
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  )
}

export default ClientLayout
