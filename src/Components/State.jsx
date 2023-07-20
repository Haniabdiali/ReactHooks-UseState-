import React, { useState } from 'react'
import {SlArrowDown} from 'react-icons/sl'
import {SlArrowUp} from 'react-icons/sl'

function State(props) {
    const [state , SetState] = useState(false);
    const handleState = () =>{
        SetState(!state)
    }
  return (
    <div className='Card'>
        <div className={state ? "option size" : "option"}>
            <h2>{props.title}</h2>
            <div className="icon" onClick={handleState}>
             {state ? <SlArrowUp/>: <SlArrowDown/>}
            </div>
        </div>
        <div className={state ? "content active" : "content"}>
            <p>{props.content}</p>
        </div>   
    </div>
  )
}

export default State