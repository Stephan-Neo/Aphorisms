import { IPost } from "../components/types/types"

interface PostProps{
    posts: IPost[]
}

export default function Aphorisms({posts}: PostProps){
    return(
        <>
            <h1>Posts</h1>
            <div>
                {posts.map(post => 
                    <div>
                        {post.c}. {post.q} Автор: {post.a}
                    </div>    
                )}
            </div>
        </>
            
    )
}