// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {
  return (
    <button onFocus={(z) => console.log('Good!')
    } onBlur={(z) => console.log('Hey! Eyes on me!')
    } >Eyes on me</button>
  )
}

export default EyesOnMe