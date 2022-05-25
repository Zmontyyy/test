import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function PageNext({showPerPage,onpaginationChange,total }) {

    const [count,SetCount] =useState(1)

    useEffect(()=>{
        const value = showPerPage * count
        onpaginationChange(value-showPerPage,value)

    },[count])
 
    const [numberofButtons,setNumberofButtons] = useState(Math.ceil(total/showPerPage))
    
const onButtonClick = (type) => {
    if (type === "prev") {
      if (count === 1) {
        SetCount(1);
      } else {
        SetCount(count - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total/showPerPage) === count) {
          SetCount(count)
      }
      else{
          SetCount(count +1)
      }
    }
  };





  return (
    <div className='' >


<nav  aria-label="Page  navigation example">
  <ul class="pagination d-flex justify-content-center">
    <li class="page-item"><a class="page-link" onClick={()=>onButtonClick('prev')} href="#">Previous</a></li>
  
   
   {new Array(numberofButtons).fill('').map((el,index)=>{
       return(
        <li class={`page-item ${index +1 === count ? "active":'null' } `}>
            <a onClick={()=>SetCount(index +1)} class="page-link" href="#">{index +1}</a>
            </li>
       )

   })}


    <li class="page-item"><a class="page-link" onClick={()=>onButtonClick('next')} href="#">Next</a></li>
  </ul>
</nav>
      
     

    </div>
  )
}

export default PageNext