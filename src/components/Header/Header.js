import React from "react";
import {Helmet} from "react-helmet";

export default function Header(props) {

    return <Helmet>
        <title>
            {props.name ? `ACM MVSR : ${props.name}` : `ACM MVSR Official Student Chapter`}
        </title>
        <link
            rel={`stylesheet`}
            href={`https://fonts.googleapis.com/css2?family=Raleway&family=Roboto+Slab:wght@600&display=swap`}
        />
        <style>{`
            html {
            scroll-behavior: smooth;
        }

            body {
            margin: 0;
            padding: 0;
            overflow-x:hidden ;
        }

            h1,h2,h3,h4,h5,h6,a,button{
            font-family: 'Roboto Slab', serif;
        }

            p,label,input,textarea{
            font-family: 'Raleway', sans-serif;
        }

            ::-webkit-scrollbar {
            display: none;
        }
`}
        </style>
    </Helmet>
}