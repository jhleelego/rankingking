'use client'

import { useState, useEffect } from 'react'
import Sider from '@/_components/Sider'
import Header from '@/_components/Header'
import axios from 'axios'
import { generateHmac } from '@/util/hmacGenerator'

const REQ_INFO = {
  DOMAIN: process.env.NEXT_PUBLIC_CP_DOMAIN,
  URL: '/v2/providers/affiliate_open_api/apis/openapi/v1/deeplink',
  ACCESS_KEY: process.env.NEXT_PUBLIC_CP_ACCESS_KEY!,
  SECRET_KEY: process.env.NEXT_PUBLIC_CP_SECRET_KEY!,
}

const REQUEST = { coupangUrls: ['https://www.coupang.com/np/search?component=&q=good&channel=user', 'https://www.coupang.com/np/coupangglobal'] }

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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

  const REQUEST_METHOD = 'POST'

  useEffect(() => {
    console.log('REQUEST_METHOD : ', REQUEST_METHOD)
    console.log('REQ_INFO.URL : ', REQ_INFO.URL)
    console.log('REQ_INFO.SECRET_KEY : ', REQ_INFO.SECRET_KEY)
    console.log('REQ_INFO.ACCESS_KEY : ', REQ_INFO.ACCESS_KEY)
    console.log('REQ_INFO.DOMAIN : ', REQ_INFO.DOMAIN)
    const authorization = generateHmac(REQUEST_METHOD, REQ_INFO.URL, REQ_INFO.SECRET_KEY, REQ_INFO.ACCESS_KEY)
    console.log('authorization.DOMAIN : ', authorization)
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_CP_DOMAIN
    axios
      .request({
        method: REQUEST_METHOD,
        url: REQ_INFO.URL,
        headers: {
          Authorization: authorization,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: REQUEST,
      })
      .then((success) => {
        console.log('success : ', success)
      })
      .catch((error) => {
        console.error('error : ', error)
      })
  }, [])

  return (
    <div className="min-h-screen flex">
      <div className={`fixed z-40 inset-0 bg-black opacity-50 ${isSidebarOpen ? 'block' : 'hidden'} md:hidden`} onClick={toggleSidebar}></div>

      {/* {isSidebarOpen ? (
        <div className={`fixed z-50 h-screen bg-white border-r-1 border text-white transition-transform transform min-w-[240px] max-w-[240px] md:relative `}>
          <Sider onClose={toggleSidebar} />
        </div>
      ) : (
        <></>
      )} */}

      <div className={`flex-1 flex flex-col transition-margin duration-300  `}>
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </div>
  )
}

export default ClientLayout
