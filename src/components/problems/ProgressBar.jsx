import React, {useState} from 'react'


const Bar = ({completed}) => {

    return (
        <div style={{width: "100%" ,height: "100%", backgroundColor:"lightgray"}}>
            <div style={{width: `${completed}%`, height: "42px", backgroundColor: "green"}}></div>
        </div>
    )
}

const ProgressBar = () => {
    const [barPercentage, setBarPercentage] = useState(0);

    const incrementBar = () => {
        let i = 0;
       let id = setInterval(() => {
            i+=10;
            console.log(i)
            if(i >= 100)
                clearInterval(id);
            setBarPercentage(i);
        }, 200)
    }
    
  return (
    <div>
        <hr />
        <Bar completed={barPercentage}/>
        <button onClick={incrementBar} > 
        Start Progress
      </button> 
    </div>
  )
}

export default ProgressBar