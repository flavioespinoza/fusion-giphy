// @flow
import React from 'react';

export default function PageHooks() {
  const [years, setYears] = React.useState(8);
  function addYear() {
    setYears(prev => prev + 1);
  }
  return (
    <div>
      <h2>I have coded in javascript for {years} years!</h2>
      <button onClick={addYear}>Add Year</button>
    </div>
  );
}
