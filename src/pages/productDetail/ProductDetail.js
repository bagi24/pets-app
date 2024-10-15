import React from 'react';
import { useParams } from 'react-router-dom';
import petsData from '../../data/petsData/petsData.json';

const ProductDetail = () => {
  const { id } = useParams();

  const pet = petsData.find(pet => pet.id === Number(id));

  if (!pet) {
    return <div>Pet not found!</div>;
  }

  return (
    <div>
      <h1>{pet.name}</h1>
      <img src={pet.image} alt={pet.name} />
      <p>Gene: {pet.gene}</p>
      <p>Age: {pet.age}</p>
      <p>Price: {pet.price}</p>
    </div>
  );
};

export default ProductDetail;
