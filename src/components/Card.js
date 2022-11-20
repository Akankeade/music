import React, { useState } from 'react'
import music from '../images/icon-music.svg'
import img from '../images/illustration-hero.svg'
import './Card.css'

function Card() {
  const [list, setList] = useState({
    text: 'Annual plan',
    price: '$55.99/year'
  })


  function change() {
    if (list.text === 'Monthly plan' && list.price === '$20.99/year') {
      setList({ text: 'Annual plan', price: '$55.99/year' })
    } else {
      setList({ text: 'Monthly plan', price: '$20.99/year' })
    }
  }


  return (

    <div className="card-main">
      <div className='card-content'>

        <div className='head-image' >
          <img src={img} alt="" />
        </div>


        <div className="summary">
          <h1>Order Summary</h1>
          <p className='comment'>You can now listen to millions of songs, <br /> audiobooks, and podcast on any device <br /> anywhere you like</p>
        </div>


        <div className="ac">
          <img src={music} alt="" style={{ width: '35px' }} />

          <div className="plan">
            <h2>{list.text}</h2>
            <p>{list.price}</p>
          </div>

          <button onClick={change}>Change</button>
        </div>

        <button className='first'>Proceed to make payment</button> <br /> <br />
        <button className='second'>Cancel Order</button>
      </div>
    </div>

  )
}

export default Card
