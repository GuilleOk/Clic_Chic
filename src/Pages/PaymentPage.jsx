import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const PaymentPage = () => {
  const { amountToPay, nameUser } = useContext(AuthContext)
  const user = nameUser().userName
  return (
    <div style={{ margin: '4rem 20rem'}}>
      <h1 className="headerPaymentPage">Hello dear {user}</h1>
      <h2 style={{ textAlign: 'center' }}>Please introduce the required information bellow</h2>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2.5rem'}}>
        <div style={{fontSize: '1.4rem'}}>
          Amount to pay: 
        </div>
        <input type="text" value={amountToPay} readOnly />
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1.4rem'}}>
        <div style={{fontSize: '1.4rem'}}>
          Target number: 
        </div>
        <input type="" />
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
        <button className="payButton">Go to pay</button>
      </div>
    </div>
  )
}

export default PaymentPage