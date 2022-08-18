import { useState } from 'react'
import './Button.css'

function Button(props) {
  

  return (
    <button className={props.classtype}>
        {props.text}
    </button>
  )
}

export default Button
