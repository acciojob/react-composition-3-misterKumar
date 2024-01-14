import React, { useState } from 'react'

const Tooltip = ({text,children}) => {

    const [show,setShow]=useState(false);
    
  return (
   <>
   <div className='tooltip'>
   <div className='tooltip-text' style={{display:show?'block':'none'}}>{text}</div>
   <div className='child'  onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>{children}</div>
   </div>
   </>
  )
}

export default Tooltip