import { useState } from 'react';

export default initValue => {
  const [state, setState] = useState(initValue);

  const handleChange = e => {
    const newState = { ...state };
    newState[e.target.name] = e.target.value;

    setState(newState);
  };

  const reset = () => {};

  return [state, handleChange, reset];
};
