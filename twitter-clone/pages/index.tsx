import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header label='home'/>
    </>
  )
}
