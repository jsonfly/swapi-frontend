import React, { useEffect, useState } from 'react';
import Starship from '../Starship/Starship';
import './Person.css';

const Person = (props) => {
  const { name, eye_color } = props.data;
  const starshipUrls = props.data.starships;
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const controllers = [];

    setStarships([]);
    starshipUrls.forEach(starshipUrl => {
      const controller = new AbortController();
      const signal = controller.signal;
      controllers.push(controller);

      fetch(starshipUrl, { signal })
      .then(res => res.json())
      .then(starshipsData => {
        setStarships(starShipsSoFar => [...starShipsSoFar, starshipsData]);
      });
    });

    return () => {
      controllers.forEach(controller => controller.abort());
    }
  }, [])

  return (
  <div className="Person">
    <h2 style={{ backgroundColor: eye_color }}>{name}</h2>

    {starships.map(starship => <Starship data={starship} />)}
  </div>
)};

Person.propTypes = {};

Person.defaultProps = {};

export default Person;
