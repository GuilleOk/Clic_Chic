/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext()

const initialState = [
  {
    id: 1,
    userName: 'Guillermo Alfredo Fernández Martínez',
    email: 'fernandez.martinez1403@gmail.com',
    pswd: '1234',
    autenticated: false
  },
  {
    id: 2,
    userName: 'Alberto Orosco del Monte',
    email: 'alfredoxxxxx@gmail.com',
    pswd: '1234',
    autenticated: false
  },
  {
    id: 3,
    userName: 'Ana Fidelia Algo Más',
    email: 'anaxxxxx@gmail.com',
    pswd: '1234',
    autenticated: false
  }
]

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(initialState)
  const [isLogged, setIsLogged] = useState(false)
  const [amountToPay, setAmountToPay] = useState(0)

  function nameUser() {
    const autenticatedUser = user.find(item => item.autenticated === true)
    return {userName: autenticatedUser.userName}
  }

  function handlerPayment(amount) {
    setAmountToPay(amount)
  }

  function isLogin(email, pswd) {
    console.log('email context: ', email)
    console.log('pswd context: ', pswd)
    const newUsers = structuredClone(user)
    console.log('newUsers: ', newUsers)
    const index = newUsers.findIndex(item => item.email === email)
    console.log('index: ', index)
    if (index === -1) {
      return null
    }
    if (newUsers[index].pswd === pswd) {
      newUsers[index].autenticated = true
      setuser(newUsers)
      setIsLogged(true)
      return {userName: newUsers[index].userName}
    } else {
      return null
    }
  }

  function isLogout(){
    const newUsers = structuredClone(user)
    const index = newUsers.findIndex(item => item.autenticated === true)
    if (index === -1) {
      return null
    }
    newUsers[index].autenticated = false
    setuser(newUsers)
    setIsLogged(false)
  }
  return (
    <AuthContext.Provider value={{ isLogin, isLogout, nameUser, isLogged, handlerPayment, amountToPay }}>{children}</AuthContext.Provider>
  )
}