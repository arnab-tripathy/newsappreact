import React, { useState } from 'react'

function SelectCat(props) {
    let catlist=["general","entertainment","health","technology","sports","science","technology"];
    const [clicked,setclick]=useState(false);
  return (
    <div className='flex flex-wrap px-3'>
    {catlist.map((item)=>{
        return (
            <div onClick={()=>{
                props.onselect(item)
                console.log(item)
      
            }} className='bg-gray-400  text-black rounded-md mx-2 my-2 hover:cursor-pointer '>
    <p id='cat' className='px-2 py-2'> {item}</p>

    </div>
        )

    })}
   


  

    </div>
  )
}

export default SelectCat