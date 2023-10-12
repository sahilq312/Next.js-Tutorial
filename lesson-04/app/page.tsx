/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Posts from './components/Posts'

export default function Home() {
  return (
    <main className=" px-6 m-auto">
      <p className=' mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and Welcome 👋
        <span className=' whitespace-nowrap'>
          I'm <span className='font-bold'>Sahil</span>
        </span>
      </p>
      <Posts/>
      
    </main>
  )
}
