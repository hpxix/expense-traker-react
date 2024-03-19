import {React, createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


//initial state:
const initialState ={
  transaction: [

  ]
}
// create context 
export const GlobalContext = createContext(initialState)

// use provider along side useReducer with actions:
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  //action
  function deleteTransaction(id){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  //action 2 
  function AddTransaction(transaction){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return(
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        AddTransaction
      }}>
      {children}
    </GlobalContext.Provider>
  )
}