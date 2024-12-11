import { useContext, useEffect, useState } from "react"
import { usegetCategorys } from "../hooks/useGetCategories"
import { useGetProducts } from "../hooks/useGetProducts"
import { CategorysContext } from "../contexts/CategorysContext"
import { useNavigate } from "react-router-dom"

const CategorysPage = () => {
  const { categories, getAllCategorys } = usegetCategorys()
  const [productsCatched, setProductsCatched] = useState([])
  const {products, getProducts} = useGetProducts()
  const { allProducts, addItem } = useContext(CategorysContext)
  const navigate = useNavigate()


  useEffect(() => {
    getAllCategorys()
  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      for (const category of categories) {
        await getProducts({ category });
        setProductsCatched([...productsCatched, products])
      }
    };
  
    fetchData();    
  }, [categories])

  useEffect(() => {
      for (const product of products) {
        addItem({ contentToAdd: products, category: product.category });
      }
      console.log('allProducts: ', allProducts)
  }, [products])

  const handlerClicCategory = ({category}) => {
    navigate(`/products/${category}`)
  }

  return (
    <div>
      <h1 style={{textAlign: 'center', fontSize: '2.5rem'}}>CATEGORIES</h1>
      <div className="categoriesContainer">
        {
          allProducts?.map(itemToShow => {
            return (
              <div key={itemToShow?.category} className="categoyContainer" onClick={()=> handlerClicCategory({category: itemToShow?.category})}>
                <img src={itemToShow?.content[0]?.image} alt={`${itemToShow?.category}`} className="categoryPhoto" />
                <h2 className="categoryText">{itemToShow?.category.toUpperCase()}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CategorysPage