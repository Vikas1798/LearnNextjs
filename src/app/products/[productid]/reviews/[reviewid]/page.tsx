import React from 'react'

const ReviewDetails  = ({ params } : { params : { reviewid: string, productid : string, }}) => {
    return (
        <>
            <h1>Review {params?.reviewid} for Product {params?.productid} </h1>
        </>
    )
}

export default ReviewDetails;