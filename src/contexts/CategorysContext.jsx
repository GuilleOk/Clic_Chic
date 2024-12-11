/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"

export const CategorysContext = createContext()

const initialState = []

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ('ADD_ITEM'): {
      const { contentToAdd, category } = payload
      if (state.length === 0) {
        const newCategory = { category, content: contentToAdd }
        return [...state, newCategory]
      } else {
        const allState = structuredClone(state)
        const index = allState.findIndex(itemState => itemState.category === category)
        if (index === -1) {
          const newCategory = { category, content: contentToAdd }
          return [...allState, newCategory]  
        } else {
          const wantedCategory = allState[index]
          const { content } = wantedCategory
          const newContent = contentToAdd.filter(itemContent => !content.some(item => item.id === itemContent.id)) 
          //se crea un array con los elementos no comunes entre lo dos arrays
          allState[index].content = [...content, ...newContent]
          return allState
        }
      }
    }
    
    case ('ADD_ITEM_TO_CART'): {
      const { category, id } = payload
      const actualState = structuredClone(state)
      console.log('actualState: ', actualState)
      const index = actualState.findIndex(item => item.category === category)
      const indexProducts = actualState[index].content.findIndex(item => item.id === id)
      actualState[index].content[indexProducts].inCart = actualState[index].content[indexProducts].inCart + 1
      return actualState
    }
      
    case ('REMOVE_ITEM_FROM_CART'): {
      const { category, id } = payload
      const actualState = structuredClone(state)
      console.log('actualState: ', actualState)
      const index = actualState.findIndex(item => item.category === category)
      const indexProducts = actualState[index].content.findIndex(item => item.id === id)
      if (actualState[index].content[indexProducts].inCart >= 0) {
        actualState[index].content[indexProducts].inCart = actualState[index].content[indexProducts].inCart - 1        
      }
      return actualState
    }
      
    case ('CLEAR_CART'): {
      const actualState = structuredClone(state)
      actualState.forEach(itemState => {
        itemState.content.forEach(itemContent => itemContent.inCart = 0)
      })

      return actualState
    }
  }
  
}
export const CategorysProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = somethingToAdd => dispatch({
    type: 'ADD_ITEM',
    payload: somethingToAdd
  })

  const addItemToCart = itemToAdd => dispatch({
    type: 'ADD_ITEM_TO_CART',
    payload: itemToAdd
  })

  const removeItemFromCart = itemToRemove => dispatch({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: itemToRemove
  })

  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })

  return (
    <CategorysContext.Provider value={{allProducts: state, addItem, addItemToCart, removeItemFromCart, clearCart}}>{children}</CategorysContext.Provider>
  )
}