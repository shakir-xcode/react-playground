import React, {useState} from 'react'


const TestInput = () => {
    const [value, setValue] = useState("");
     function handleChange(event) {
        setValue(event.target.value);
      }
     
      return (
        <div>
          <input className='bg-white border-2' type="text" value={value} onChange={handleChange} />
          <p>You entered: {value}</p>
        </div>
      );
    
    }
    

const CurrencyConverter = () => {
    const [inr, setInr] = useState(0);
    const [usd, setUsd] = useState(0);

    const inrToUsd = (inr) => {
        return (parseInt(inr || 0)*80).toString();
    }

    const handleChange = (e) => {
        setInr(e.target.value);
        setUsd(inrToUsd(e.target.value))
    } 

  return (
    <div>
        <hr/>
        <input className='bg-white border-2' type='text'  value={inr} onChange={handleChange}/>
        <p>USD: {usd}</p>
        <hr/>

        <TestInput/>
    </div>
  )
}


export default CurrencyConverter