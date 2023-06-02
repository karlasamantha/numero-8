import data from './productList.json'

export function getProduct(productId) {
  return data.filter((product) => product.ProductID === parseInt(productId))
}
