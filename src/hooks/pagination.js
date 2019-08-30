import { useState } from 'react';

export default (initialValue, fnc) => {
  const [state, setState] = useState(initialValue);

  const handleNextMove = move => {
    return () => {
      if (move !== 'Next' && move !== 'Prev') return;

      let { pageNumber, pageSize } = state;
      move === 'Next' ? (pageNumber += 1) : (pageNumber -= 1);

      // Execute the query action
      fnc(pageNumber, pageSize);

      // Set the new state
      setState({ pageNumber, pageSize });
    };
  };

  return [state, handleNextMove];
};
