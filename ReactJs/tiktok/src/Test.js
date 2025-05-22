import React from 'react';
// This is a test component


function Test({onIncrease}) {
  return (
    <div>
      <h1>Test</h1>
      <p>This is a test component.</p>
      <button onClick={onIncrease}>Click me!</button>
    </div>
  );
}

export default React.memo(Test);