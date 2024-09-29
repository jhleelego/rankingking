'use client'

import { useEffect } from 'react'
import Logo from './Logo'
import { useSample } from '@/_api/MbrApi'
import ResErrorMessage from '@/_common/_data/ResErrorMessage'

const Sider = ({ onClose }: { onClose: () => void }) => {
  const { data: sampleData, error: sampelError } = useSample(1000)

  useEffect(() => {
    console.log('NEXT_PUBLIC_CP_BASE_URL 1')
    console.log('NEXT_PUBLIC_CP_BASE_URL : ', process.env.NEXT_PUBLIC_CP_BASE_URL)
    console.log('sampleData : ', sampleData)
  }, [sampleData])

  useEffect(() => {
    if (sampelError) {
      console.log('sampelError : ', sampelError)
      const error = sampelError as unknown as ResErrorMessage
      console.log('sampelError : ', error)
    }
  }, [sampelError])

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
