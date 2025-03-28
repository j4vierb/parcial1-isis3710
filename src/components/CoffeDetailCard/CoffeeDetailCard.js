import './CoffeeDetailCard.css';
import { useState, useEffect } from 'react';

import { getCoffeeById } from '../../services/getData';

const CoffeeDetailCard = ({ coffee }) => {
  const [coffeeDetail, setCoffeeDetail] = useState({});

  useEffect(() => {
    getCoffeeById(coffee.id, (data) => {
      setCoffeeDetail(data);
    })
  }, [coffee.id]);

  return (
    <div className="detail-card">
      <h2>{coffeeDetail.nombre}</h2>
      <p>{coffeeDetail.fecha_cultivo}</p>
      <img src={coffeeDetail.imagen} alt={coffeeDetail.nombre} />
      <h3 className="detail-card-title">Notas</h3>
      <p className="detail-card-notes">{coffeeDetail.notas}</p>
      <p className="detail-card-h">Cultivado a una altura de {coffeeDetail.altura}msnm</p>
    </div>
  )
}

export { CoffeeDetailCard };