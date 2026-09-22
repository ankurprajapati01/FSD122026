import React from 'react'

const Saman = ({ title, price, image }) => {
  return (
    <div className="items">
      <img src={image} alt={title} />

      <h2>Title: {title}</h2>
      <h3>Price: ₹{price}/-</h3>

      <button>Add to Cart</button>
    </div>
  )
}

export default Saman