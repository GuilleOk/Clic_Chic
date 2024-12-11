import { useContext } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { CategorysContext } from "../contexts/CategorysContext"

const ProductsCategory = () => {
  const { category } = useParams()
  const { allProducts, addItemToCart } = useContext(CategorysContext)
  const categoryToShow = allProducts.filter(item => item.category === category)
  const { content } = categoryToShow[0]
  const navigate = useNavigate()

  const handlerRedicret = ({id}) => {
    navigate(`/products/${category}/${id}`)
  }

  const handlerCart = ({ i }) => {
    const product = content[i]
    console.log('product: ', { category: product.category, id: product.id })
    addItemToCart({category: product.category, id: product.id})
  }
  return (
    <div>
      <h1 style={{textAlign: 'center', fontSize: '2.5rem'}}>{category.toUpperCase()}</h1>
      <Outlet />
      <div className="productsContainer">
      {
        content.map((itemToShow, i) => {
          return (
            <div key={itemToShow.id} className="productContainer">
              <img src={itemToShow.image} alt={itemToShow.title} className="productPhoto" />
              <h4 className='titleProduct'>{itemToShow.title.toUpperCase()}</h4>
              <div style={{display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: 'auto', padding: '.6rem'}}>
                <button className="buttonPrice">Price: ${itemToShow.price}</button>
                <button className="buttonProduct" onClick={() => handlerRedicret({id: itemToShow.id})}>View product</button>
                <button className="buttonProduct" onClick={() => handlerCart({i})}>Add to cart</button>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default ProductsCategory