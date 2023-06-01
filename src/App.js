import data from './utils/productList.json'

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Products</h1>

      {data.map((product) => (
        <div key={product.ProductID}>
          <div>
            <div>
              <img src={product.ThumbnailURL} alt="" />
            </div>

            <div>
              <p className="product-name">{product.Name}</p>
              <span className="product-price">${product.Price}</span>
              <span className="product-retail">${product['Retail Price']}</span>
            </div>

            <div xs={3}>
              <button className="view-details">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
