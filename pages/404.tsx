import Link from "next/link";

export default function ErrorPage() {
    return(
        <div className="Error">
            <h1>Error 404</h1>
            <p>Please <Link href={'/'}>go to main page</Link></p>
            <img src="cat.png" alt="" />
        </div>
        
    )
}