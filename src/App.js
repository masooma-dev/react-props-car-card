import React from 'react';
import CarCard from './CarCard';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>React Props - Car Cards</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <CarCard name="Toyota Corolla" model="2023" price="25000" image="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500" />
        <CarCard name="Honda Civic" model="2024" price="28000" image="https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500" />
        <CarCard name="Suzuki Swift" model="2022" price="18000" image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500" />
      </div>
    </div>
  );
}
export default App;