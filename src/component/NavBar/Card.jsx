import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
        <p>{props.content}</p>
        <h3>{props.title}</h3>
    </div>
  )
}

export default Card