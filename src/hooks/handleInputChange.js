import { useState } from 'react';

export default initValue => {
  const [state, setState] = useState(initValue);

  const handleChange = (e, image = null) => {
    const newState = { ...state };

    image
      ? (newState['image'] = image)
      : (newState[e.target.name] = e.target.value);

    if (e.target.name === 'current') newState[e.target.name] = e.target.checked;

    setState(newState);
  };

  const reset = () => {
    setState(initValue);
  };

  return [state, handleChange, reset];
};
