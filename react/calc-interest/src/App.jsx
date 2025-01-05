import { useState } from 'react'
import InvestmentParams from './components/InvestmentParams.jsx'
import Results from './components/Results.jsx';

function App() {
  const [values, setValues] = useState({ "initial": 10000, "annual": 6000, "expected": 10, "duration": 15 });
  function changeHandler(e) {
    const { name, value } = e.target;

    setValues(prevValues => { return { ...prevValues, [name]: value } });
  }


  return (
    <div>
      <InvestmentParams values={values} onChangeHandler={changeHandler} />
      <Results values={values} />
    </div>
  )
}

export default App
