import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'
import React from 'react'


function LinkButton({ to, text }) {
    return (
      <Link  className="btn" to={to}>
        {text}
      </Link>
    )
  }
  
  export default LinkButton