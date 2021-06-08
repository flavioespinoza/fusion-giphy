/* eslint-disable cup/no-undef */
// @flow
import React from 'react';
import {JsonView} from 'json-view-for-react';

const dataModelUser = {
  gender: 'female',
  name: {
    title: 'Miss',
    first: 'Leah',
    last: 'Lawson',
  },
  location: {
    street: {
      number: 3085,
      name: 'Grove Road',
    },
    city: 'Maynooth',
    state: 'Westmeath',
    country: 'Ireland',
    postcode: 45536,
    coordinates: {
      latitude: '26.4279',
      longitude: '65.9483',
    },
    timezone: {
      offset: '+10:00',
      description: 'Eastern Australia, Guam, Vladivostok',
    },
  },
  email: 'leah.lawson@example.com',
  login: {
    uuid: '984f44ae-628c-4109-b68f-0e0e752a5a21',
    username: 'yellowbird925',
    password: 'lumber',
    salt: 'jGXfdJCA',
    md5: 'a206c151b06d27701b2061b14bbf3104',
    sha1: '0104f3b08b0a8b2179191b36fa79bb1df457dfb2',
    sha256: 'bcd8d81b98cd3d13cbd3a57dbd7d8cf3c6f188b1ed00011fba44e914cc479670',
  },
  dob: {
    date: '1948-01-07T03:51:57.042Z',
    age: 73,
  },
  registered: {
    date: '2017-09-10T03:32:03.223Z',
    age: 4,
  },
  phone: '031-163-6109',
  cell: '081-361-9826',
  id: {
    name: 'PPS',
    value: '5470409T',
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/44.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/44.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/44.jpg',
  },
  nat: 'IE',
};

export default function PageHooks() {
  const [years, setYears] = React.useState(8);
  const [color, setColor] = React.useState('navy');
  // const [user, setUser] = React.useEffect([]);
  function addYear() {
    setYears(prev => prev + 1);
  }
  React.useEffect(() => {
    // Perform Side Effects
    document.body.style.backgroundColor = color;
    document.body.style.color = 'white';
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
  React.useEffect(() => {
    fetch('https://randomuser.me/api/?results=500')
      .then(res => res.json())
      .then(data => {
        console.log(JSON.stringify(data.results[0], null, 2));
      });
  });
  return (
    <div>
      <h1>I have coded in javascript for {years} years!</h1>
      <button onClick={addYear}>Add Year</button>
      <button onClick={() => changeColor('gold')}>
        Change Background to Gold
      </button>
      <button onClick={() => changeColor('navy')}>
        Change Background to Navy
      </button>
      <div>
        <JsonView
          obj={dataModelUser}
          cssPrefix="jsonview"
          showLineNumbers
          highlightedLineNumbers={[2, 4]}
        />
      </div>
    </div>
  );
}
