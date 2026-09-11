import React from 'react'
import Saman from './Saman'

const Home = () => {
  const itemData = [
    {
      id: 1,
      title: "ReactJS",
      price: 465,
      image: "/react.png"
    },
    {
      id: 2,
      title: "NodeJS",
      price: 565,
      image: "/node.png"
    },
    {
      id: 3,
      title: "ExpressJS",
      price: 763,
      image: "/express.png"
    }
  ]

  return (
    <div className="home">
      {itemData.map((item) => (
        <Saman
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default Home