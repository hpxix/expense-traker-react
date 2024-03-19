import React, { useState } from 'react'
import UpdatedBid from './HOC'

function Person1({ bid, bidHandler }) {
  return (
    <>
    <div>johns bid: ${bid}</div>
    <button className='btn' onClick={bidHandler}> BID MORE </button>
    </>
  )
}

export default UpdatedBid(Person1)