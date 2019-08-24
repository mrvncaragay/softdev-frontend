import { useState } from 'react';

export default initValue => {
  const [state, setState] = useState(initValue);

  const handleChange = (e, image = null) => {
    const newState = { ...state };
    image
      ? (newState['image'] = image)
      : (newState[e.target.name] = e.target.value);

    setState(newState);
  };

  const reset = () => {};

  return [state, handleChange, reset];
};
