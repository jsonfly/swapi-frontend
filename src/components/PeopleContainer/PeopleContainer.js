import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './PeopleContainer.css';

const PeopleContainer = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://swapi.dev/api/people', { signal })
      .then(res => res.json())
      .then(peopleData => setPeople(peopleData.results.slice(0, 3)));

    return () => {
      controller.abort();
    };
  }, []);

  return (
  <div className="PeopleContainer">
    <h1>Star Wars Characters</h1>

    <div className='characters'>
      {
        people.map(person => <Person data={person} />)
      }
    </div>
  </div>
)};

PeopleContainer.propTypes = {};

PeopleContainer.defaultProps = {};

export default PeopleContainer;
