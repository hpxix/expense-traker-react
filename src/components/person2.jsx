import React, { useState } from 'react'
import UpdatedBid from './HOC'

function Person2({ bid, bidHandler }) {
  return (
    <>
    <div>johns bid: ${bid}</div>
    <button className='btn' onClick={bidHandler}> BID MORE </button>
    </>
  )
}

export default UpdatedBid(Person2)