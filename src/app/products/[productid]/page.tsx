import React from 'react'

const ProductDetail  = ({ params } : {params : { productid : string}}) => {
    return (
        <>
            <h1>Selected Product Details of id {params.productid}</h1>
        </>
    )
}

export default ProductDetail;