import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
  const { isLogged } = useContext(AuthContext)
  
  if (isLogged) {
    return (
      <>
        <Navigate to='/payment' replace />
        <Outlet />
      </>
    )
  } else {
    return <Navigate to='/login' />
  }
}

export default ProtectedRoutes