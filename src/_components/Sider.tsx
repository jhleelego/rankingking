import { useEffect } from 'react'
import Logo from './Logo'
import axios from 'axios'

const Sider = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    console.log('a')
    // 카테고리 ID와 기타 파라미터 설정
    const categoryId = 1001 // 예시로 여성패션 카테고리 ID 사용
    const limit = 50
    const subId = 'rankingking' // 채널 아이디 (옵션)
    const imageSize = '512x512' // 이미지 사이즈 (옵션)

    // API 호출 URL 생성
    const url = `https://api-gateway.coupang.com/v2/providers/affiliate_open_api/apis/openapi/products/bestcategories/${categoryId}?limit=${limit}&subId=${subId}&imageSize=${imageSize}`

    // axios를 사용하여 API 호출
    axios
      .get(url)
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
