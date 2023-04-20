import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session, status} = useSession()
  const router = useRouter()

  if(status === 'loading'){
    return null
  }

  if(session){
    router.push('/home')
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Login Page</h1>
      <a href='/api/auth/signin'>Login</a>
    </main>
  )
}