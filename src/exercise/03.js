// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext

const Context = React.createContext()

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

// extra credit - 1
function useCount() {
  const context = React.useContext(Context)

  if(!context){
    throw new Error('useCount must be used within the Context Provider')
  }

  return context
}

// wrapper method
function CountProvider(props){
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <Context.Provider value={value} {...props} />
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  // const count = 0
  // const [count] = React.useContext(Context)
  const [count] = useCount(Context)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  // const setCount = () => {}
  // const [ , setCount] = React.useContext(Context)
  const [ , setCount] = useCount(Context)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
