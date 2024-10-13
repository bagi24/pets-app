import React from 'react';
import petsData from '../../data/petsData/petsData.json';

const PetsList = () => {
  return (
    <div>
      <h2>pets Listsს</h2>

      {petsData.map(pet => (
        <div key={pet.id}>
          <img src={pet.image} alt={pet.name} />
          <h2>{pet.name}</h2>
          <p>{pet.gene}</p>
          <p>{pet.age}</p>
          <p>{pet.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PetsList;
