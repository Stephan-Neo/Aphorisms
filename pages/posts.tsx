import { useState, useEffect } from "react"
import Aphorisms from "../components/Aphorisms"
import { MainLayout } from "../components/MainLayout"
import { IPost } from "../components/types/types"
import axios from "axios"

export default function Posts(){
    const [aphorisms, setAphorisms] = useState<IPost[]>([])
    const [key, setKey] = useState('23')

    useEffect(() => {
        console.log('done')
        fetchAphorisms()
        console.log(aphorisms)
    }, [])

    async function fetchAphorisms(){
        try{
            const response = await axios.get<IPost[]>(`https://zenquotes.io/api/quotes/${key}&custom=true`)
            setAphorisms(response.data)
        } catch (e){
            
        }
    }   

    return(
        <MainLayout title={'Афоризмы'}>
            <Aphorisms posts={aphorisms}/>
        </MainLayout>
    )
}