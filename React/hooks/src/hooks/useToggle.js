import React, { useState } from 'react'

function useToggle(initVal = false) {
   const [state, setState] = useState(initVal);

   const toggleState = () => {
      setState(!state);
   };

   return [state, toggleState];
};

export default useToggle;
