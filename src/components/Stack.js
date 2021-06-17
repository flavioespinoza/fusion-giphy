// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import balanced from '../code/balanced';

const Button = styled('button', {
  textTransform: 'uppercase',
  padding: '0.7em',
  margin: '0.2em',
  color: 'white',
  backgroundColor: 'hotpink',
  border: 'none',
  borderRadius: '0.15em',
  boxShadow: '2px 2px 2px 2px rgb(0,0,0,0.15)',
  cursor: 'pointer',
});

const Input = styled('input', {
  padding: '0.6em',
  margin: '0.2em',
});

const Stack = () => {
  const [value, setValue] = React.useState('');
  const [isBalanced, setIsBalanced] = React.useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (balanced(value)) {
      setIsBalanced('True');
    } else {
      setIsBalanced('False')
    }
  }

  return (
    <div>
      <label>
        <Input type='text' value={value} onChange={handleChange} />
      </label>
      <Button onClick={handleClick}>Validate Input</Button>
      <div style={{margin: '12px 0'}}>
        Is input balanced? <b>{isBalanced}</b>
      </div>
    </div>
  );
};

export default Stack;
