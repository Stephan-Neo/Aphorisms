import { link } from "fs";
import React from "react";
import Router from 'next/router'

export default function About(){
    const linkCkickHandler = () => {
        Router.push('/')
    }
    return(
        <React.Fragment>
            <h1>About</h1>
            <button onClick={linkCkickHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go back Posts</button>
        </React.Fragment>
    )
} 