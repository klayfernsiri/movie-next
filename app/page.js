import Image from 'next/image'
import Navbar from './navbar'
export default function Home() {
  return (
    <main className="w-full h-screen">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      <div className='p-7'>
      <Navbar/>
      </div>
    </main>
  )
}
