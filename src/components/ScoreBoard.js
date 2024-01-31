import React from 'react'
import "./ScoreBoard.css"
export default function ScoreBoard({score,detectPlayer}) {
 const {xScore,oScore}=score
    return (
    <div className='scoreboard'>
      <span className={`score x-score ${!detectPlayer && "inactive"}`}>X-{xScore}</span>
      <span className={`score o-score ${detectPlayer && "inactive"}`}>O-{oScore}</span>
    </div>
  )
}
