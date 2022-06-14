import React from 'react'

function Input() {

    const inputHandler = (event : any) => {
        console.log(event.target.value)
    }

  return (
    <>
    <input type="text" onChange={inputHandler}/>
    </>
  )
}

export default Input