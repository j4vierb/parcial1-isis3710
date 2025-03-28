import { useEffect } from 'react';
import './CoffeeList.css';
import { useState } from 'react';

import { getCoffees } from '../../services/getData';

import { CoffeeDetailCard } from '../../components/CoffeDetailCard/CoffeeDetailCard';

const CoffeeListPage = () => {
  const [data, setData] = useState([]);
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  useEffect(() => {
    // using a callback to get data from the API
    // and set it to the state
    getCoffees((coffeData) => {
      setData(coffeData);
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
            {data.map((coffe, i) => {
              return (
                <tr key={i} style={{ cursor: 'pointer' }} onClick={(e) => { setSelectedCoffee(coffe) }}>
                  <td>{coffe.id}</td>
                  <td>{coffe.nombre}</td>
                  <td>{coffe.tipo}</td>
                  <td>{coffe.region}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="detail-container">
        { selectedCoffee && <CoffeeDetailCard coffee={selectedCoffee} /> }
      </div>
    </div>
  );
}

export { CoffeeListPage };