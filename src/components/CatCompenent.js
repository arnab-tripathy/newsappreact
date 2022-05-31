import { bgcolor } from '@mui/system'
import React from 'react'

function CatCompenent(props) {
    console.log(props.clicked)
  return (
    <div onClick={()=>{
        props.catclicked(props.cat)
    }} style={props.clicked?{backgroundColor:'blue'}:{}} className='bg-gray-400  text-black rounded-md mx-2 my-2 hover:cursor-pointer '>
        <p className='px-2' >{props.cat}</p>
    </div>
  )
}

export default CatCompenent