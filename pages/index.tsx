import Link from "next/link"
import Head from "next/head"
import { MainLayout } from "../components/MainLayout"

export default function Home(){
  return (
    <MainLayout title={'Главная страница'}>
        <h1>Next JS</h1>
        <p><Link href={'/about'}><a>About</a></Link></p>
        <p><Link href={'/posts'}><a>Posts</a></Link></p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, error.</p>
    </MainLayout>
  )
}

