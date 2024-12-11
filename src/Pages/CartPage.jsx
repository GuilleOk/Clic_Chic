import { useContext, useEffect} from "react"
import { CategorysContext } from "../contexts/CategorysContext"
import { usePutProductsInCart } from "../hooks/usePutProductsInCart"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

const CartPage = () => {
  const { allProducts, addItemToCart, removeItemFromCart, clearCart } = useContext(CategorysContext)
  const {handlerPayment, amountToPay} = useContext(AuthContext)
  const { products, getProducts } = usePutProductsInCart()
  const navigate = useNavigate()

  useEffect(() => {
    getProducts({ allProducts })
  }, [allProducts])

  useEffect(() => {
    let total = 0
    products.forEach(item => total = total + item.inCart * item.price)
    handlerPayment(total)
  }, [products])
  

  const handlerLess = ({ category, id }) => {
    removeItemFromCart({category, id})
  }

  const handlerAdd = ({ category, id }) => {
    addItemToCart({ category, id })
  }

  const handlerClear = () => {
    clearCart()
  }

  const handlerPerform = () => {
    if (products.length > 0) {
      setTimeout(()=>{ navigate('/payment') }, 100)
    }
  }

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row-reverse', padding: '1rem'}}>
        <button className="buttonClear" onClick={handlerClear}>Clear</button>
      </div>
      {
        products?.map(item => {
          return (
            <div key={item.id} className="itemCartContainer">
              <img src={item.image} alt={item.title} className="itemPhotoCart" />
              <div style={{display: 'grid', gridTemplateRows: 'repeat(2, 1fr)'}}>
                <h2 style={{textAlign: 'center'}}>{item.title}</h2>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                  <button className="buttonsModifyAmountCartItem" onClick={()=> handlerLess({category: item.category, id: item.id})}>-1</button>
                  <button className="itemAmountCart">Quantity: {item.inCart}</button>
                  <button className="itemAmountCart">Price: ${item.price}</button>
                  <button className="itemAmountCart">Amount: ${item.price * item.inCart}</button>
                  <button className="buttonsModifyAmountCartItem" onClick={() => handlerAdd({category: item.category, id: item.id})}>+1</button>
                </div>
              </div>
            </div>
          )
        })
      }

      <div className="redirectToPayContainer">
        <h2 className="labelToPayCart">Total a pagar: {amountToPay}</h2>
        <button className="buttonRedirectToPay" onClick={handlerPerform}>Perform payment</button>
      </div>
    </div>
  )
}

export default CartPage