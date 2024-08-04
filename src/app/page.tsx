import Item from '@/_components/Item'

const Home = () => {
  return (
    <main className="flex-1 bg-white p-4 text-black bg-green-100">
      <h2 className="text-xl font-bold ">제트플립 추천</h2>
      <iframe
        className="w-full h-full"
        src="https://galaxy-warehouse.com/%ea%b0%a4%eb%9f%ad%ec%8b%9c-%ec%a0%9c%ed%8a%b8%ed%94%8c%eb%a6%bd2-z-pop-%ec%b9%b4%eb%93%9c%ec%88%98%eb%82%a9-%ed%95%98%eb%93%9c-%ec%bc%80%ec%9d%b4%ec%8a%a4-z-flip2-%ec%a7%80%ed%94%8c%eb%a6%bd2/"
      />
      <Item />
    </main>
  )
}

export default Home
