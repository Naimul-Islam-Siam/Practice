import React, { useState } from 'react'

function CounterHooks() {
   const [counter, setCounter] = useState(0);
   return (
      <div>
         <h2>The value is {counter}</h2>
         <button onClick={() => setCounter(counter + 1)}>Inc</button>
      </div>
   );
};

export default CounterHooks;