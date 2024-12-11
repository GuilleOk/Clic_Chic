import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CategorysContext } from "../contexts/CategorysContext"

const ProductReview = () => {
  const { category, id } = useParams()
  const {allProducts, addItemToCart} = useContext(CategorysContext)
  const products = allProducts.filter(item => item.category === category)
  const product = products[0].content.find(itemToget => itemToget.id === id)

  const handlerCart = () => {
    const productsCategory = allProducts.findIndex(item => item.category === product.category)
    console.log('product.id', product.id)
    console.log('index: ', allProducts[productsCategory].content.findIndex(item => item.id === product.id))
    console.log('product: ', {category: product.category, id: product.id})
    addItemToCart({category: product.category, id: product.id})
    // console.log('product: ', product)
  }

  return (
    <div>
      <div className="ProductReviewContainer">
        <img src={product.image} alt={product.title} className="photoProductReview" />
        <div className="productDetails">
          <h2 className="titleProductReview">{product.title}</h2>
          <p style={{ margin: '1rem', textAlign: 'justify', marginBottom: '2rem' }}>{product.description}</p>
          <div style={{display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: 'auto', padding: '.6rem'}}>
            <button className="buttonPrice">Price: ${product.price}</button>
            <button className="buttonAddToCartProductReview" onClick={handlerCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductReview