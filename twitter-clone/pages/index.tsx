import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Form from '@/components/Form/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header label='Home'/>
    <Form />
    </>
  )
}
