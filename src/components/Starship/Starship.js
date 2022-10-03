import React from 'react';
import PropTypes from 'prop-types';
import './Starship.css';

const Starship = ({ data: { name, cost_in_credits, max_atmosphering_speed } }) => (
  <div className="Starship">
    <h3>{ name }</h3>
    <p>Cost: <span className='cost'>{ cost_in_credits }</span></p>
    <p>Max speed: <span className='speed'>{ max_atmosphering_speed }</span></p>
  </div>
);

Starship.propTypes = {};

Starship.defaultProps = {};

export default Starship;
