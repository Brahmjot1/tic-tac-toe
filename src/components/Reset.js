import React from 'react'
import "./Reset.css"
export default function Reset({resetBoard}) {
  return (
    <div>
      <button className='reset' onClick={resetBoard}>Reset</button>
    </div>
  )
}
