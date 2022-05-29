import { useState, useEffect } from "react"
import Aphorisms from "../components/Aphorisms"
import { MainLayout } from "../components/MainLayout"
import { IPost } from "../components/types/types"
import axios from "axios"

export default function Posts(){
    const [aphorisms, setAphorisms] = useState<IPost[]>([])
    const [key, setKey] = useState('23')

    useEffect(() => {
        if(localStorage.getItem("load") !== 'true'){
            fetchAphorisms()
        }else{
            setAphorisms([{"q":"When the fish is caught we pay no more attention to the trap.","a":"Huang Po","c":"61","h":"<blockquote>&ldquo;When the fish is caught we pay no more attention to the trap.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>"}])
        }
    }, [])

    async function fetchAphorisms(){
        try{
            const response = await axios.get<IPost[]>(`https://zenquotes.io/api/quotes/${key}&custom=true`)
            setAphorisms(response.data.slice(1, 10))

            if(response.status === 200){
                localStorage.setItem("load", 'true')
                localStorage.setItem("data", JSON.stringify(response.data.slice(1, 10)))
                response.data.map((data) => {
                    for(let i = 0; i < 10; i++){
                        localStorage.setItem(`id_${i}`, JSON.stringify(data))
                    }
                    
                })
              
            } 
        } catch (e){
            
        }
    }   

    return(
        <MainLayout title={'Афоризмы'}>
            <Aphorisms posts={aphorisms}/>
        </MainLayout>
    )
}