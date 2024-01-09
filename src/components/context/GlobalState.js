import {React, createContext, useReducer} from 'react'
import Appreducer from './AppReducer'
//initial state:

const initialState = {
  transaction: []
}
//Create conetxt:
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = ({ children }) =>{
  const [state, dispatch] = useReducer(Appreducer, initialState)
  //actions
  function deleteTransaction(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  function AddTransaction(transaction){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return(<GlobalContext.Provider value={{
    transaction: state.transaction,
    deleteTransaction,
    AddTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
} 