import { imageOptimizer } from "next/dist/server/image-optimizer"
import React, { useEffect, useState } from "react"
import { isContext } from "vm"
import { IPost } from "../components/types/types"

interface BindProps{
    update: boolean
}

interface PostProps{
    posts: IPost[];
    update: () => void;
}

export default function Aphorisms({posts, update}: PostProps){
    
    const [like, setLike] = useState(false)

    useEffect(() => {
        setLike(false)
    }, [like])

    function reset(){
        localStorage.clear()
        update()
    }

    return(
        <>
            <div className="content__wrapper">
                <div className="header">
                    <h1>Афоризмы</h1>
                    <div className="changeButton" onClick={reset}>Новые Афоризмы</div>
                </div>
                <div className="aphorism__card-grid">
                    {posts.map((post, index) => 
                        <div className="aphorism__card">
                            <div className="aphorism__text">
                                {post.q}
                            </div>
                            <div className="aphorism__avtor">
                                <img src="human.ico" alt="" />
                                {post.a}
                            </div>
                            <div className="aphorism__like">
                                <div className="like" id={`id_${index}`} onClick={() => {
                                    if(localStorage.getItem(`id_${index}`) === '1'){
                                        localStorage.setItem(`id_${index}`, '0')
                                        localStorage.setItem(`id_${index}_count`, `${Number(localStorage.getItem(`id_${index}_count`)) - 1}`)
                                    }else{
                                        localStorage.setItem(`id_${index}`, '1')
                                        localStorage.setItem(`id_${index}_count`, `${Number(localStorage.getItem(`id_${index}_count`)) + 1}`)
                                    }
                                    setLike(true)
                                    }}>
                                    {localStorage.getItem(`id_${index}`) === '0' ? <img src="like-disactive.ico"/>: <img src="like-active.ico"/>}
                                </div>
                                {localStorage.getItem(`id_${index}_count`)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
        
    )
}