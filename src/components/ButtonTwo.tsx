import React from 'react'

function ButtonTwo() {
    function clickHandler(){
        console.log("Button Clicked!")
    }

  return (
    <button className="btn btn-primary" type="button">Button</button>
  )
}

export default ButtonTwo