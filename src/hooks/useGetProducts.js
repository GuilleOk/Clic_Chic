import { useState } from "react"

export const useGetProducts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const getProducts = async ({category}) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
      if (!response.ok) {
        throw new Error('error de conexión')
      } else {
        const data = await response.json()
        const lastProducts = data.map((item, i) => {
          if (i < 10) {
            return { id: `${item.id}${item.category}${item.price}`, title: item.title, price: item.price, description: item.description, category: category, image: item.image, inCart: 0 }
          }
        }
        )
        setProducts(lastProducts)
      }
    }catch (err) {
      setError(err.message)
    }
  }
  return {products, getProducts, error}
}