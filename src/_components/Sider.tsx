'use client'

import { useEffect } from 'react'
import Logo from './Logo'
import { useSample } from '@/_api/MbrApi'
import ResErrorMessage from '@/_common/_data/ResErrorMessage'
import { getFetchData } from '@/_common/_net/RestApi'

const Sider = ({ onClose }: { onClose: () => void }) => {
  // const { data: sampleData, error: sampelError } = useSample(1000)

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const data = await getFetchData<any, {}>(`products/bestcategories/1000`)
      console.log(`data : ${JSON.stringify(data)}`)
      // ...
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   console.log('sampleData : ', sampleData)
  // }, [sampleData])

  // useEffect(() => {
  //   if (sampelError) {
  //     console.log('sampelError : ', sampelError)
  //     const error = sampelError as unknown as ResErrorMessage
  //     console.log('sampelError : ', error)
  //   }
  // }, [sampelError])

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
