// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// essentially defining the setter method
// function countReducer(state, action){
//   return action
// }

// extra credit - 1
// function countReducer(state, action){
//   return state + action
// }

// extra credit - 2
// const countReducer = (state, action) => ({ ...state, ...action})

// extra credit - 3
// const countReducer = (state, action) => ({
//   ...state,
//   ...(typeof action === 'function' ? action(state) : action)
// })

// extra credit - 4
function countReducer(state, action){
  switch(action.type){
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    default: {
      throw new Error(`unsupported action type ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)

  // const [count, setCount] = React.useReducer(countReducer, initialCount)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // const increment = () => setCount(count + step)
  // extra credit - 1
  // const increment = () => setCount(step)

  // extra credit - 2
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  // const increment = () => setState({count: count + step})

  // extra credit - 3 
  // const increment = () => setState(currentState => ({count: currentState.count + step}))

  // extra credit - 4
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>

}

function App() {
  return <Counter />
}

export default App
