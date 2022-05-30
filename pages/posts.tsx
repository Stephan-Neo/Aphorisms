import { useState, useEffect } from "react"
import Aphorisms from "../components/Aphorisms"
import { MainLayout } from "../components/MainLayout"
import { IPost } from "../components/types/types"
import axios from "axios"

export default function Posts(){
    const [aphorisms, setAphorisms] = useState<IPost[]>([])
    const [key, setKey] = useState<String>('23')

    useEffect(() => {
        if(localStorage.getItem("load") !== 'true'){
            fetchAphorisms()
        }else{
            setAphorisms(JSON.parse(localStorage.getItem("data")))       
        }
    }, [])

    async function fetchAphorisms(){
        try{
            const response = await axios.get<IPost[]>(`https://zenquotes.io/api/quotes/${key}&custom=true`)
            setAphorisms(response.data.slice(1, 10))

            if(response.status === 200){
                localStorage.setItem("load", 'true')
                localStorage.setItem("data", JSON.stringify(response.data.slice(1, 10)))
                response.data.slice(1, 10).map((data, index) => {
                    localStorage.setItem(`id_${index}`, '0')
                    localStorage.setItem(`id_${index}_count`, `${data.c}`)
                })
            } else{
               
            }
        } catch (e){
           
        }
    }   

    return(
        <MainLayout title={'Афоризмы'}>
            <Aphorisms posts={aphorisms} update={fetchAphorisms}/>
        </MainLayout>
    )
}