import Link from "next/link"
import Head from "next/head"
import { MainLayout } from "../components/MainLayout"

export default function Home(){
  return (
    <MainLayout title={'Главная страница'}>
      <div className="main__page">
        <h1>Тестовое задание для студенческой лаборатории 2022</h1>
          <ul>
            <li>Next JS</li>
            <li>React JS</li>
            <li>TypeScript</li>
          </ul>
          <div className="myName">
            Казанцев Степан
          </div>
      </div>
    </MainLayout>
  )
}

