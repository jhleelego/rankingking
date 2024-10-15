'use client'

import axios from 'axios'
import Logo from './Logo'
import { generateHmac } from '@/util/hmacGenerator'
import { useEffect } from 'react'
import ClientLayout from './ClientLayout'

const REQ_INFO = {
  DOMAIN: process.env.NEXT_PUBLIC_CP_DOMAIN,
  URL: '/v2/providers/affiliate_open_api/apis/openapi/v1/deeplink',
  ACCESS_KEY: process.env.NEXT_PUBLIC_CP_ACCESS_KEY!,
  SECRET_KEY: process.env.NEXT_PUBLIC_CP_SECRET_KEY!,
}

const Sider = ({ onClose }: { onClose: () => void }) => {
  // const REQUEST_METHOD = 'POST'

  // // Replace with your own ACCESS_KEY and SECRET_KEY

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const REQUEST = { coupangUrls: ['https://www.coupang.com/np/search?component=&q=good&channel=user', 'https://www.coupang.com/np/coupangglobal'] }

  // useEffect(() => {
  //   console.log('REQUEST_METHOD : ', REQUEST_METHOD)
  //   console.log('REQ_INFO.URL : ', REQ_INFO.URL)
  //   console.log('REQ_INFO.SECRET_KEY : ', REQ_INFO.SECRET_KEY)
  //   console.log('REQ_INFO.ACCESS_KEY : ', REQ_INFO.ACCESS_KEY)
  //   console.log('REQ_INFO.DOMAIN : ', REQ_INFO.DOMAIN)
  //   ;(async () => {
  //     const authorization = generateHmac(REQUEST_METHOD, REQ_INFO.URL, REQ_INFO.SECRET_KEY, REQ_INFO.ACCESS_KEY)
  //     console.log('authorization : ', authorization)
  //     axios.defaults.baseURL = REQ_INFO.DOMAIN

  //     try {
  //       const response = await axios.request({
  //         method: REQUEST_METHOD,
  //         url: REQ_INFO.URL,
  //         headers: { Authorization: authorization },
  //         data: REQUEST,
  //       })
  //       console.log(response.data)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   })()
  // }, [REQUEST])

  return (
    <div>
      <ClientLayout>a</ClientLayout>
      <div className={`flex items-center justify-between px-4 h-[48px] `}>
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
