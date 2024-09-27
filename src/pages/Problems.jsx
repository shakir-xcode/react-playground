import React from 'react'
import StateProblems from '../components/problems/StateProblems'
import CurrencyConverter from '../components/problems/CurrencyConverter'
import IndexAsKey from '../components/problems/IndexAsKey'
import ProgressBar from '../components/problems/ProgressBar'

const Problems = () => {
  return (
    <div>
        <StateProblems/>
        <CurrencyConverter /> 
        <IndexAsKey />
        <ProgressBar />
    </div>
  )
}

export default Problems