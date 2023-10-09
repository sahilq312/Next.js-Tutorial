import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen ">
     <h1>Home</h1>
     <button className='bg-red-500 flex h-6 justify-center items-center rounded-md'>
     <Link className='' href={"/about"}>about us</Link>
     </button>
    </main>
  )
}
