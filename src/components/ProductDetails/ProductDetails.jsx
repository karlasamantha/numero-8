import React, { Fragment } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../utils/fetcher";
import Banner from "../Banner/Banner";

function ProductDetails() {
  const { productId } = useParams()

  const [showBanner, setShowBanner] = React.useState(false)
  const [product] = getProduct(productId)

  const stockColor = product.Stock === 0 ? 'text-red-500' : 'text-inherit'

  return (
    <Fragment className="relative">
      {showBanner && <Banner />}
      <div className="grid grid-cols-row gap-4 overflow-hidden m-10">
        <div className="">
          <img src={product.PictureURL} alt=""/>

          <div></div>
          <div>
            <p className="text-slate-500">
              <span className="text-slate-600 font-semibold">
                Brand:
              </span>
              {' '}
              {product.Brand}
            </p>
            <p className="text-slate-500">
              <span className="text-slate-600 font-semibold">
                Color:
              </span>
              {' '}
              {product.Color}
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-lg mb-2 font-bold">{product.Name}</h1>
          <p>{product.Description}</p>
        </div>

        <div className="items-center justify-between flex flex-col">
          <div className="relative">
            <span className="justify-self-start text-xl">${product.Price}</span>
            <span className="absolute top-0 text-xs m-2 line-through">${product["Retail Price"]}</span>
          </div>

          <div className="flex flex-col items-center">
            <span className={stockColor}>{product.Stock === 0 ? 'Out of Stock' : `Available: ${product.Stock}`}</span>
            <button
              className="bg-green-400 hover:bg-green-600 text-white py-3 px-6 rounded-md"
              onClick={() => setShowBanner(!showBanner)}
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductDetails