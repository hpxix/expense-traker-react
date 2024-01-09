import React, { useContext, useState } from 'react'
import { GlobalContext } from './context/GlobalState'

export default function AddTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { AddTransaction } = useContext(GlobalContext)
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction ={
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    AddTransaction(newTransaction)
  }
  return (
    <>
          <h3>Add new transaction</h3>
     <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" >Text</label>
          <input type="text" id="text" placeholder="Enter text... " value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>

    </>
  )
}
