import React from 'react'

function Button() {

    function clickHandler(){
        console.log("Button Clicked!")
    }

  return (
    <button className="button btn btn-primary" type="button">Submit</button>
  )
}

export default Button