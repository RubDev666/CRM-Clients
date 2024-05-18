'use client';

import { useEffect } from "react";

export default function IndexPage({datos}: {datos: any}) {

    useEffect(() => {
        console.log(datos)
    }, [])

    return(
        <>
            <h1>use client</h1>
        </>
    )
}