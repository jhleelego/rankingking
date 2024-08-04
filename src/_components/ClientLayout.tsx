'use client'

import { useState, useEffect } from 'react'
import Sider from '@/_components/Sider'
import Header from '@/_components/Header'

const REQUEST_METHOD = 'POST'
const URL = process.env.NEXT_PUBLIC_CP_URL || ''
const SECRET_KEY = process.env.NEXT_PUBLIC_CP_SECRET_KEY || ''
const ACCESS_KEY = process.env.NEXT_PUBLIC_CP_ACCESS_KEY || ''

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const REQUEST = {
    coupangUrls: [
      'https://www.coupang.com/np/search?component=&q=1234&channel=user',
      'https://www.coupang.com/np/coupangglobal',
    ],
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

  useEffect(() => {
    // const authorization = generateHmac(
    //   REQUEST_METHOD,
    //   URL,
    //   SECRET_KEY,
    //   ACCESS_KEY,
    // )
    // axios.defaults.baseURL = process.env.NEXT_PUBLIC_CP_DOMAIN
    // axios
    //   .request({
    //     method: REQUEST_METHOD,
    //     url: URL,
    //     headers: { Authorization: authorization },
    //     data: REQUEST,
    //   })
    //   .then((success) => {
    //     console.log('success : ', success)
    //   })
    //   .catch((error) => {
    //     console.error('error : ', error)
    //   })
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
        className={`fixed z-50 h-screen bg-white border-r-1 border text-white p-4 transition-transform transform min-w-[240px] max-w-[240px] ${
          isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full '
        } md:relative md:translate-x-0 md:w-1/4`}
      >
        <Sider isSidebarOpen={isSidebarOpen} onClose={toggleSidebar} />
      </div>

      <div
        className={`flex-1 flex flex-col transition-margin duration-300  ${
          isSidebarOpen ? 'md:ml-1/4' : 'md:ml-0'
        }`}
      >
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  )
}

export default ClientLayout
