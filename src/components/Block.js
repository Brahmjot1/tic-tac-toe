import React from 'react'
import "./Block.css"
export default function block({value,onClick}) 
{
  var style;
    if(value==="X")
    {
        style="block x"
    }
    else
    style="block o"
  return (
    <div>
      <button className={style} onClick={onClick}>{value}</button>
    </div>
  )
}
