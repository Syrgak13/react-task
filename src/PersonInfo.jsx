import React from 'react';

const PersonCard = ({ name, position, company, additionalInfo }) => (
  <div>
    <h2>{name}</h2>
    <p>Должность: {position}</p>
    <p>Компания: {company}</p>
    <ul>
      {additionalInfo.map((info, index) => (
        <li key={index}>{info}</li>
      ))}
    </ul>
  </div>
);

export default PersonCard;
