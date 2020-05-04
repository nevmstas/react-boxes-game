import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function CountdownTimer() {

    const [counter, setCounter]  = React.useState(60);
    //setInterval(() => setCounter(counter-1), 1000);

    React.useEffect(()=>{
        const timer = 
            counter > 0 && setInterval(() => setCounter( counter - 1 ),1000);
        return () => clearInterval(timer);
    }, [counter])

  return(
      <div>
          Timer: {counter}
      </div>
  )
}

export default CountdownTimer