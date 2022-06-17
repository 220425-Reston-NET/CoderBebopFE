import React from 'react'

function ButtonTwo() {
    function clickHandler(){
        console.log("Button Clicked!")
    }

  return (
    <button type="button" className="button btn btn-primary btn-lg">Create an Account</button>
  )
}

export default ButtonTwo