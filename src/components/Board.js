import React from 'react'
import Block from '../components/Block';
import "./Board.css"
export default function Board({boardList,onClick}) 
{

  return (
    <div className='board'>
        {boardList.map((value,idx) =>{
           return  <Block value={value}  onClick={()=> value===null && onClick(idx)}/>
        })}
    
    </div>
  )
}
