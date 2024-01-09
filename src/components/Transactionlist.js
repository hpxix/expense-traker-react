import {React, useContext} from 'react'
import { GlobalContext } from '../components/context/GlobalState'
import { Transaction } from './Transaction'


export default function Transactionlist() {
  const { transaction }  = useContext(GlobalContext)
  return (
    <>
    <h3>History</h3>
    <ul className='list'>
      {transaction && transaction.map(transactionItems => (<Transaction key={transactionItems.id} transaction={transactionItems}/>))}
    </ul>
    </>
)
}
