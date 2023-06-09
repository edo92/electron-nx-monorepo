import React from 'react';

export const App = () => {
  const handleOnClick = () => {
    window.api.greet('hello');
  };

  return (
    <div>
      <h1>Hello</h1>
      <div>
        <button onClick={handleOnClick}>Click</button>
      </div>
    </div>
  );
};
