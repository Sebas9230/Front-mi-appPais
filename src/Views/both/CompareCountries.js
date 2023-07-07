import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCountries } from '../../Controllers/countryController';
import './stadistic-country.css';
import { calcularNivelFelicidad } from './CalcularFelicidad';
import { calcularLogoFelicidad } from './CalcularLogoFelicidad';

const StadisticCountry = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [selectedCountry1, setSelectedCountry1] = useState('');
  const [selectedCountry2, setSelectedCountry2] = useState('');
  const [countryStats1, setCountryStats1] = useState(null);
  const [countryStats2, setCountryStats2] = useState(null);
  const [bestStatsCountry, setBestStatsCountry] = useState(null);

  const loadCountries = async () => {
    try {
      const response = await getCountries();
      setCountries(response);
    } catch (error) {
      console.error('Error al cargar países desde la interfaz:', error);
    }
  };

  const handleChangeCountry1 = (event) => {
    setSelectedCountry1(event.target.value);
  };

  const handleChangeCountry2 = (event) => {
    setSelectedCountry2(event.target.value);
  };

  //Borrado?
  const handleShowStats = () => {
    const statsCountry1 = countries.find((country) => country.pais === selectedCountry1);
    const statsCountry2 = countries.find((country) => country.pais === selectedCountry2);

    if (statsCountry1) {
      const nivelFelicidad1 = calcularNivelFelicidad(statsCountry1);
      statsCountry1.indiceFelicidad = nivelFelicidad1;
      setCountryStats1(statsCountry1);
    }

    if (statsCountry2) {
      const nivelFelicidad2 = calcularNivelFelicidad(statsCountry2);
      statsCountry2.indiceFelicidad = nivelFelicidad2;
      setCountryStats2(statsCountry2);
    }
  };


  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (countryStats1 && countryStats2) {
      if (countryStats1.indiceFelicidad.valor > countryStats2.indiceFelicidad.valor) {
        setBestStatsCountry(countryStats1);
      } else {
        setBestStatsCountry(countryStats2);
      }
    }
  }, [countryStats1, countryStats2]);

  return (
    <>
      <div className="container">
        <div className="masthead">
          <h1>Estadísticas por país</h1>
          <div className="form-group">
            <label htmlFor="country1">Seleccionar país 1:</label>
            <select id="country1" value={selectedCountry1} onChange={handleChangeCountry1}>
              <option value="">Seleccionar</option>
              {countries.map((country) => (
                <option key={country.id} value={country.pais}>
                  {country.pais}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="country2">Seleccionar país 2:</label>
            <select id="country2" value={selectedCountry2} onChange={handleChangeCountry2}>
              <option value="">Seleccionar</option>
              {countries.map((country) => (
                <option key={country.id} value={country.pais}>
                  {country.pais}
                </option>
              ))}
            </select>
          </div>
          <button className="btn" onClick={handleShowStats}>
            Mostrar
          </button>
          {bestStatsCountry && (
            <div className="best-country-stats">
              <h2>Mejores estadísticas</h2>
              <p>El país con mayor índice de felicidad es: {bestStatsCountry.pais}</p>
              <p>Valor índice de felicidad de {bestStatsCountry.pais} es: {calcularNivelFelicidad(bestStatsCountry).valor}</p>
              <p>{calcularLogoFelicidad(bestStatsCountry)}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StadisticCountry;
