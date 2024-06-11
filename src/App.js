import React from 'react'
import handleClick2 from './handleClick'
import {useState} from 'react'

const App = () => {

  
  return (
    <button onClick={()=> handleClick2('bala')}></button>
  )

}


export default App