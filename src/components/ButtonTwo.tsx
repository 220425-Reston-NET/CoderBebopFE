import React from 'react'

function ButtonTwo() {
    function clickHandler(){
        console.log("Button Clicked!")
    }

  return (
    <button className='buttontwo' onClick={clickHandler}>Create Account</button>
  )
}

export default ButtonTwo