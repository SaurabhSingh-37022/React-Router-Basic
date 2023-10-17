import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
    const navigate = useNavigate();
    function clickHandler(){
        // Move to About Page
        navigate("/about")
    }
    function backHandler(){
        // Back to About Page
        navigate(-1)
    }

  return (
    <div>
        <h1> This is Labs Page</h1>
        <button onClick={clickHandler}>Move to About Page</button>
        <button onClick={backHandler}>Go TO Back</button>
      
    </div>
  )
}

export default Labs
