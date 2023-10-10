import React from 'react'
import Link from 'next/link'

export default function About() {
  //throw new Error("not today")
  return (
    <div>
      <h1>
      About
      </h1>
      <button className='bg-red-500 flex h-6 justify-center items-center rounded-md'>
      <Link href='/'>home</Link>
      </button>
    </div>
  )
}

