import { useEffect } from 'react';
import './CoffeList.css';
import { useState } from 'react';

import { getData } from '../../services/getData';

import { CoffeDetailCard } from '../../components/CoffeDetailCard/CoffeDetailCard';

const CoffeListPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // using a callback to get data from the API
    // and set it to the state
    getData((coffeData) => {
      setData(coffeData);
      console.log(coffeData);
    });
  }, []);

  return (
    <div className="coffe-list-page">
      <div className="table-container">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Región</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Espresso</td>
              <td>Medium</td>
              <td>$2.50</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Latte</td>
              <td>Light</td>
              <td>$3.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="detail-container">
        <div className="detail-card">
          <h2>Coffee Details</h2>
          <p><strong>Name:</strong> Espresso</p>
          <p><strong>Roast:</strong> Medium</p>
          <p><strong>Price:</strong> $2.50</p>
          <p><strong>Stock:</strong> In Stock</p>
        </div>
      </div>
    </div>
  );
}

export { CoffeListPage };