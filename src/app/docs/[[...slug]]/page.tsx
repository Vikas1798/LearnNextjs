import React from 'react'

const Docs  = ({params} : { params : { slug : string[]}}) => {
    if(params.slug?.length === 2){
        return (
            <>
                <h1>Docs page length 2 {params.slug[0]}, {params.slug[1]}</h1>
            </>
        )
    }else if(params.slug?.length === 1){
        return (
            <>
                <h1>Docs page length 1 {params.slug[0]}</h1>
            </>
        )
    }
    return (
        <>
            <h1>More than docs pages</h1>
        </>
    )
}

export default Docs;