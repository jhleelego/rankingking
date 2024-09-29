'use client'

import { useEffect } from 'react'
import Logo from './Logo'
import axios from 'axios'
import { generateHmac } from '@/util/hmacGenerator'
import { useQuery } from '@tanstack/react-query'
import { useSample } from '@/_api/MbrApi'

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
  const { data: sampleData } = useSample(1000)

  useEffect(() => {
    console.log('sampleData : ', sampleData)
  }, [sampleData])

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
