import { useRouter } from "next/router"
import Head from "next/head"
import MainLayout from "../../components/MainLayout"

export default function Post(){
    const router = useRouter()
    return(
        <MainLayout>
            <Head>
                <title>{router.query.id}</title>
            </Head>
            <h1>Post {router.query.id}</h1>
        </MainLayout>   
    )
}