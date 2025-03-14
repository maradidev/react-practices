import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState (value)

    const handleAdd = ({operacion}) => {
        if (operacion=== 'suma'){
            setCounter(counter + 1)
        }

        if (operacion=== 'resta'){
            setCounter(counter-1)
        }

        if (operacion=== 'reset'){
            setCounter(0)
        }

    }


  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>
    <button onClick={() => handleAdd({operacion: 'resta'})}>-1</button>
    <button onClick={() => handleAdd({operacion: 'suma'})}>
        +1
        </button>
    <button onClick={() => handleAdd({operacion: 'reset'})}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 12
}

export default CounterApp