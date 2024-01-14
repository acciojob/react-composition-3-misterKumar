import React,{useState} from 'react'

let ToolTip= (props)=>{
    let [hover,Sethover]=useState({display: 'none'})
return(
    <div>
       <h2 className='tooltiptext' style={hover}><div>{props.text}</div></h2>
        <p className='tooltip'><div onMouseEnter={()=>Sethover({display: 'block'})} onMouseLeave={()=>Sethover({display: 'none'})}>{props.children}</div></p>
    </div>
)
}

export default ToolTip