import React from 'react';

function CarCard({ name, model, price, image }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', width: '250px', margin: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', background: 'white' }}>
      <img src={image} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p style={{ fontWeight: 'bold', color: 'green' }}>${price}</p>
    </div>
  );
}
export default CarCard;