import {React, useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

export default function Balance() {
  const { transaction } = useContext(GlobalContext)
  const amount = transaction.map(transaction => transaction.amount)
  const totall = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  console.log('totall =======>', totall)

  return (
    <>
    <h4>Your Balance</h4>
    <h1 id="balance">${totall}</h1>
    </>
  )
}
