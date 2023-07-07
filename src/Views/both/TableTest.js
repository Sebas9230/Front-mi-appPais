import React, { useState } from 'react';
import { getCountries } from '../../Controllers/countryController';
import './TableTest.css';


const TableTest = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [pibValue, setPibValue] = useState('');
  const [libertadValue, setLibertadValue] = useState('');

  const handlePibChange = (event) => {
    setPibValue(event.target.value);
  };

  const handleLibertadChange = (event) => {
    setLibertadValue(event.target.value);
  };

  const handleFilterClick = async () => {
    try {
      const response = await getCountries();
      const filtered = response.filter(
        (country) =>
          country.pib >= parseFloat(pibValue) &&
          country.libertadDecisiones >= parseFloat(libertadValue)
      );
      setFilteredCountries(filtered);
    } catch (error) {
      console.error('Error al filtrar países:', error);
    }
  };

  return (
    <div>
      <h2>Filtrar países</h2>
      <div className="filter-container">
        <div className="filter-item">
          <label htmlFor="pibInput">Valor del PIB:</label>
          <input
            id="pibInput"
            type="number"
            value={pibValue}
            onChange={handlePibChange}
          />
        </div>
        <div className="filter-item">
          <label htmlFor="libertadInput">Libertad de decisiones:</label>
          <input
            id="libertadInput"
            type="number"
            value={libertadValue}
            onChange={handleLibertadChange}
          />
        </div>
        <button onClick={handleFilterClick}>Filtrar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>País</th>
            <th>PIB per cápita</th>
            <th>Esperanza de vida</th>
            <th>Libertad de decisiones</th>
            <th>Generosidad</th>
            <th>Corrupción</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country, index) => (
            <tr key={country.id}>
              <td>{index + 1}</td>
              <td>{country.pais}</td>
              <td>{country.pib}</td>
              <td>{country.esperanzaVida}</td>
              <td>{country.libertadDecisiones}</td>
              <td>{country.generosidad}</td>
              <td>{country.corrupcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTest;
