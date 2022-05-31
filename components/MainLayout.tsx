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
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no"/>
            </Head>
            <nav className="Navbar">
               <Link href={'/'}><a>Главная</a></Link>
               <Link href={'/posts'}><a>Афоризмы</a></Link>
            </nav>
            <div className="wrapper">
                {children}
            </div>
            <footer>
                <div className="by">by GTSK</div>  
            </footer>
        </>
    )
}