/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"

export const usegetCategorys = () => {
  const [categories, setcategories] = useState([])
  const [error, seterror] = useState()
  const getAllCategorys = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      if (!response.ok) {
        throw new Error('Error de conexión')
      } else {
        const categorys = await response.json()
        setcategories(categorys)
      }
    } catch (err) {
      seterror(err.message)
    }
  }

  return {categories, getAllCategorys, error}
}