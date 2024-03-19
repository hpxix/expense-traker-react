import React, { useState } from 'react'

function UpdatedBid(OriginalComponent) {
  const NewComponent = () => {
    const [bid, setBid] = useState(10)
    const bidHandler = () => {
      setBid( bid * 2 )
    }
    return <OriginalComponent bid={bid} bidHandler={bidHandler}/>
  }
  return NewComponent
}

export default UpdatedBid