'use client'

import Item from '@/_components/Item'

const Home = () => {
  return (
    <main className="flex-1 bg-white text-black bg-green-100 relative">
      {/* <h2 className="text-xl font-bold ">제트플립 추천</h2> */}
      <div
        className="w-full h-full cursor-pointer absolute z-40"
        onClick={() => alert('a')}
      ></div>
      <Item />
    </main>
  )
}

export default Home
