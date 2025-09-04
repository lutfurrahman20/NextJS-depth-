export default async function productReview({params, } : {params : Promise<{productId : string ; reviewId : string}>}){
    const {productId, reviewId} = await params
    return <h1>review {reviewId} for product Id {productId} </h1>

}