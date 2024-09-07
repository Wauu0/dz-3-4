// components/Description.jsx
import React from 'react';


const Description = ({ details }) => {
  return (
    <div>
      <h2>{details.title}</h2>
      <p>{details.description}</p>
    </div>
  );
};

export default Description;
