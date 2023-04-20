import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session, status} = useSession()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home Page</h1>
      <a href='/api/auth/signin'>Login</a>
    </main>
  )
}
