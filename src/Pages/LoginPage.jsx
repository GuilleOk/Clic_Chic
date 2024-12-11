import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, useNavigate } from "react-router-dom"

const LoginPage = () => {
  const {isLogin, isLogged} = useContext(AuthContext)
  const navigate = useNavigate()

  if (isLogged) {
    return <Navigate to='/' replace />
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    const dataForm = new FormData(event.target)
    const email = dataForm.get("email")
    const pswd = dataForm.get("pswd")
    console.log('email', typeof email)
    console.log('pswd: ', typeof pswd)
    const verify = isLogin(email, pswd)
    console.log('verify: ', verify)
    if (verify !== null) {
      navigate('/')
    }
  }

  return (
    <div className="loginContainer">
      <form onSubmit={handlerSubmit}>
        <div className="itemFormLoginContainer">
          <div className="labelLoginContainer">
            E-mail:
          </div>
          <div className="formElementLogin">
            <input type="email" name="email" /> 
          </div>
        </div>
        <div className="itemFormLoginContainer">
          <div className="labelLoginContainer">
            Password:
          </div>
          <div className="formElementLogin">
            <input type="password" name="pswd" />
          </div>
        </div>
        <div className="buttonsOPtionsLogin">
          <button type="reset" className="resetLogin">Clear</button>
          <button type="submit" className="submitLogin">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage