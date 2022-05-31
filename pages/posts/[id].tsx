import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { MainLayout } from "../../components/MainLayout"

export default function Post(){
    const [like, setLike] = useState(false)

    useEffect(() => {
        setLike(false)
    }, [like])

    const router = useRouter()
    return(
        <MainLayout title={`Афоризм ${router.query.id}`}>
            <div className="about__post">
                <div className="text">
                    {JSON.parse(localStorage.getItem('data'))[`${router.query.id}`].q}
                </div>
                <div className="avtor">
                    Автор: {JSON.parse(localStorage.getItem('data'))[`${router.query.id}`].a}
                </div>
                <div className="like__wrapper">
                    <div className="like" id={`id_${router.query.id}`} onClick={() => {
                        if(localStorage.getItem(`id_${router.query.id}`) === '1'){
                            localStorage.setItem(`id_${router.query.id}`, '0')
                            localStorage.setItem(`id_${router.query.id}_count`, `${Number(localStorage.getItem(`id_${router.query.id}_count`)) - 1}`)
                        }else{
                            localStorage.setItem(`id_${router.query.id}`, '1')
                            localStorage.setItem(`id_${router.query.id}_count`, `${Number(localStorage.getItem(`id_${router.query.id}_count`)) + 1}`)
                        }
                        setLike(true)
                        }}>
                        {localStorage.getItem(`id_${router.query.id}`) === '0' ? <img src="../like-disactive.ico"/>: <img src="../like-active.ico"/>}
                    </div>
                    {localStorage.getItem(`id_${router.query.id}_count`)}
                </div>
            </div>
        </MainLayout>
    )
}