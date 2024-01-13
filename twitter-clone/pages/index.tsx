import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header';
import Form from '@/components/Form/Form';
import PostFeed from '@/components/Posts/PostFeed/PostFeed';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header label='Home'/>
    <Form placeholder="What's happening?"/>
    <PostFeed />
    </>
  )
}
