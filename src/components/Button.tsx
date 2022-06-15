import React from 'react'

function Button() {

    function clickHandler(){
        console.log("Button Clicked!")
    }

  return (
    <button className='button' onClick={clickHandler}>Submit</button>
  )
}

export default Button