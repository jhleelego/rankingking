'use client'

import { useEffect } from 'react'
import Logo from './Logo'
import axios from 'axios'
import { generateHmac } from '@/util/hmacGenerator'

const REQUEST_METHOD = 'GET'
const URL = process.env.NEXT_PUBLIC_CP_URL_BESTCATEGORIES || ''
const SECRET_KEY = process.env.NEXT_PUBLIC_CP_SECRET_KEY || ''
const ACCESS_KEY = process.env.NEXT_PUBLIC_CP_ACCESS_KEY || ''

const REQUEST = {
  limit: 50,
  subId: 'rankingking',
  imageSize: '512x512',
}

const Sider = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const authorization = generateHmac(
      REQUEST_METHOD,
      URL,
      SECRET_KEY,
      ACCESS_KEY,
    )

    axios
      .request({
        method: REQUEST_METHOD,
        url: `${URL}?limit=${REQUEST.limit}&subId=${REQUEST.subId}&imageSize=${REQUEST.imageSize}`,
        headers: {
          Authorization: authorization,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // 응답 처리
        console.log('응답 데이터:', response.data)
      })
      .catch((error) => {
        // 에러 처리
        console.error('API 호출 오류:', error)
      })
  }, [])
  return (
    <div>
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
