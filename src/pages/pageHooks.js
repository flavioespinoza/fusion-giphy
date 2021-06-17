/* eslint-disable cup/no-undef */
// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import Stack from '../components/Stack';

// createContext Helps Us Avoid Prop Drilling
const DeveloperContext = React.createContext();

const HookDiv = styled('div', {
  backgroundColor: 'white',
  color: 'black',
  padding: '12px',
  borderRadius: '4px',
  boxShadow: '0 5px 5px gray',
});

const HookButton = styled('button', {
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

const HookInput = styled('input', {
  padding: '0.6em',
  margin: '0.2em',
});

function Hooks() {
  const [years, setYears] = React.useState(8);
  const [color, setColor] = React.useState('gainsboro');
  const [user, setUser] = React.useState(null);
  const inputRef = React.useRef('');

  // useContext Helps Us Avoid Prop Drilling
  const developer = React.useContext(DeveloperContext);

  function addYear() {
    setYears(prev => prev + 1);
  }
  React.useEffect(() => {
    // Perform Side Effects
    document.body.style.backgroundColor = color;
    document.body.style.color = 'black';
    document.body.style.padding = '24px';
    // Unsubscribe by Returning a Function
    window.addEventListener('keydown', handleEnterButton);
    return () => {
      window.removeEventListener('keydown', handleEnterButton);
    };
  }, [color]);
  function changeColor(newColor) {
    setColor(newColor);
  }
  function handleEnterButton(e) {
    if (e.keyCode === 13) {
      setColor('hotpink');
    }
  }
  // Fetch Data from an API
  React.useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(res => res.json())
      .then(data => {
        const filterItems = (arr, prop, val) => {
          return arr.filter(el => el[prop] === val);
        };
        const nat = 'US';
        const citizensUs = filterItems(data.results, 'nat', nat);
        if (citizensUs.length > 0) {
          setUser(citizensUs[0]);
        } else {
          setUser({message: `No ${nat} citizens in response data`});
        }
      })
      .catch(error => console.error(error));
  }, []);
  // useRef to Reference React Elements
  function handleClearInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
    inputRef.current.focus();
  }
  return (
    <HookDiv>
      <h1>
        My name is {developer.name} I have coded in javascript for {years}{' '}
        years!
      </h1>
      <Stack />
      <div style={{margin: '12px 0'}}>
        <HookButton onClick={addYear}>Add Year</HookButton>
        <HookButton onClick={() => changeColor('gold')}>
          Change Background to Gold
        </HookButton>
        <HookButton onClick={() => changeColor('navy')}>
          Change Background to Navy
        </HookButton>
      </div>
      <form style={{marginBottom: 12}}>
        <HookInput type="text" ref={inputRef} />
        <HookButton onClick={handleClearInput}>Clear</HookButton>
      </form>
      <div>
        Current user: <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </HookDiv>
  );
}

const PageHooks = () => {
  const [developer] = React.useState({name: 'Flavio'});
  return (
    <DeveloperContext.Provider value={developer}>
      <Hooks />
    </DeveloperContext.Provider>
  );
};

export default PageHooks;
