import Link from 'next/link'

const Logo = () => {
  return (
    <>
      {/* <Link href="http://127.0.0.1:3000">
        <h1 className="font-bold text-black whitespace-nowrap">
          <span className="text-yellow-500 text-lg">👑</span>
          &nbsp;
          <span className=" text-red-600">랭</span>
          <span className=" text-yellow-500">킹</span>
          <span className=" text-blue-500">킹</span>
        </h1>
      </Link> */}
      <Link href="/">
        <h1 className="font-bold text-black whitespace-nowrap">
          <span className="text-[24px] italic text-red-600">랭</span>
          <span className="text-[24px] italic text-yellow-500">킹</span>
          <span className="text-[24px] italic text-blue-500">킹</span>
        </h1>
      </Link>
    </>
  )
}
export default Logo
