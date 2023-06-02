import { Link } from 'react-router-dom'
import data from './utils/productList.json'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="container flex min-h-screen flex-col justify-center overflow-hidden my-4">
      {data.map((product) => (
        <Card key={product.ProductID}>
          <img src={product.ThumbnailURL} alt="" className="aspect-square" />

          <div className="flex flex-row justify-between flex-1 ml-4">
            <div className="self-center relative">
              <p className="font-medium text-xl">{product.Name}</p>
              <span className="text-base">${product.Price}</span>
              <span className="text-xs line-through absolute ml-1">
                ${product['Retail Price']}
              </span>
            </div>

            <div className="self-center">
              <Link
                to={`details/${product.ProductID}`}
                className="bg-green-400 hover:bg-green-600 text-white py-3 px-6 rounded-md"
              >
                View Details
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default App
