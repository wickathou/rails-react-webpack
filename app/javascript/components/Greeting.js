import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGreeting, fetchGreeting } from '../store/greetingSlice'

const Greeting = () => {
  const dispatch = useDispatch()
  const greetingText = useSelector((state) => state.greeting.greeting)
  return (
    <>
      <h1>
        {greetingText}
      </h1>
      <button onClick={() => dispatch(setGreeting())}>Click here to reset</button>
      <button onClick={() => dispatch(fetchGreeting())}>Fetch a new random greeting</button>
    </>
  )
}

export default Greeting