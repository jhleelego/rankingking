const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex-1 bg-white p-4">
      <h2 className="text-xl font-bold">Home</h2>
      {children}
    </main>
  )
}

export default Home
