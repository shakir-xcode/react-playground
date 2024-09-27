import React, {useState, useEffect} from 'react'

const StateProblems = () => {
    const [count, setCount] = useState(0);
    const [delayedItem, setDelayedItem] = useState(false);



    useEffect(() => {
       console.log("Component rendered successfully");
     }, []);
      return (
       <div className='mt-5'>
         <button onClick={() => {
             setCount(count + 1);
             setCount(count + 1);
             setCount(count + 1);
         }
            }>Increment</button>

<button onClick={() => {
      setDelayedItem(true);
         }
            }>Delayed Item</button>
         <p>You clicked {count} times</p>
     {  delayedItem &&  
      <p>value of state is {count} </p>
     }  </div>
     );
   }
export default StateProblems