import Link from "next/link"
import Head from "next/head"

interface Main{
    children: React.ReactNode
    title: string
}

export  function MainLayout({children, title}: Main){
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="my test project" content="next + react + typesript"/>
            </Head>
            <nav className="Navbar">
               <Link href={'/'}><a>Главная</a></Link>
               <Link href={'/posts'}><a>Афоризмы</a></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}