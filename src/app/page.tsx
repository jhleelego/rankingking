import Item from '@/_components/Item'

const Home = () => {
  return (
    <main className="flex-1 bg-white p-4 text-black bg-green-100">
      <h2 className="text-xl font-bold ">Home</h2>
      <span className="text-[100px] bg-white">👑</span>
      <Item />
    </main>
  )
}

export default Home
