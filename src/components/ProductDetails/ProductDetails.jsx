import React from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../utils/fetcher";

function ProductDetails() {
  const { productId } = useParams()
  const [product] = getProduct(productId)

  return (
    <div className="grid grid-cols-row gap-4 overflow-hidden m-10">
      <div className="">
        <img src={product.PictureURL} alt=""/>
      </div>

      <div className="">
        <h1>{product.Name}</h1>
        <p>{product.Description}</p>
      </div>

      <div className="justify-items-center">
        <span>{product.Price}</span>
        <span>{product["Retail Price"]}</span>
        <span>{product.Stock}</span>

        <button className="bg-green-400 hover:bg-green-600 text-white py-3 px-6 rounded-md">Add to Card</button>
      </div>
    </div>
  )
}

export default ProductDetails