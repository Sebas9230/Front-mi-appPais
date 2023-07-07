// import React from 'react'
// import { useEffect, useState } from 'react';

// //Para navegar en las rutas
// import { useNavigate } from 'react-router-dom'

// //Funciones de countryController
// import { getCountries } from '../../Controllers/countryController';

// const StadisticCountry = () => {
//     return (
//     <h1>Bienvenido, elige un país</h1>
//     );
// }

// export default StadisticCountry;

import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCountries } from '../../Controllers/countryController';
import './stadistic-country.css'; // Importa el archivo CSS aquí
import { calcularNivelFelicidad } from './CalcularFelicidad';
import { calcularLogoFelicidad } from './CalcularLogoFelicidad';

const StadisticCountry = () => {
    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryStats, setCountryStats] = useState(null);

    const loadCountries = async () => {
        try {
            const response = await getCountries();
            setCountries(response);
        } catch (error) {
            console.error('Error al cargar países desde la interfaz:', error);
        }
    };

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    //   const handleShowStats = () => {
    //     const selectedStats = countries.find(
    //       (country) => country.pais === selectedCountry
    //     );
    //     setCountryStats(selectedStats);
    //   };


    const handleShowStats = () => {
        //Asignar valor índice de felicidad
        const selectedStats = countries.find((country) => country.pais === selectedCountry);
        if (selectedStats) {
            const nivelFelicidad = calcularNivelFelicidad(selectedStats);
            selectedStats.indiceFelicidad = nivelFelicidad;
            setCountryStats(selectedStats);
        }

        //Asignar carita según indice de felicidad
        const selectedStatsGrafico = countries.find((country) => country.pais === selectedCountry);
        if (selectedStatsGrafico) {
            const logoNivelFelicidad = calcularLogoFelicidad(selectedStats);
            selectedStats.logoFelicidad = logoNivelFelicidad;
            setCountryStats(selectedStatsGrafico);
        }
    };


    useEffect(() => {
        loadCountries();
    }, []);

    return (
        <>
            <div className="container">
                <div className="masthead">
                    <h1>Estadísticas por país</h1>
                    <div className="form-group">
                        <label htmlFor="country">Seleccionar país:</label>
                        <select
                            id="country"
                            value={selectedCountry}
                            onChange={handleChange}
                        >
                            <option value="">Seleccionar</option>
                            {countries.map((country) => (
                                <option key={country.id} value={country.pais}>
                                    {country.pais}
                                </option>
                            ))}
                        </select>
                        <button className="btn" onClick={handleShowStats}>Mostrar</button>
                    </div>
                    {countryStats && (
                        <div className="country-stats">
                            <h2>Estadísticas para {countryStats.pais}</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>PIB:</td>
                                        <td>{countryStats.pib}</td>
                                    </tr>
                                    <tr>
                                        <td>Esperanza de vida:</td>
                                        <td>{countryStats.esperanzaVida}</td>
                                    </tr>
                                    <tr>
                                        <td>Libertad de decisiones:</td>
                                        <td>{countryStats.libertadDecisiones}</td>
                                    </tr>
                                    <tr>
                                        <td>Generosidad:</td>
                                        <td>{countryStats.generosidad}</td>
                                    </tr>
                                    <tr>
                                        <td>Corrupción:</td>
                                        <td>{countryStats.corrupcion}</td>
                                    </tr>
                                    <tr>
                                        <td>Valor índice de Felicidad:</td>
                                        <td>{countryStats.indiceFelicidad.valor}</td>

                                    </tr>

                                    <tr>
                                        <td>Valoración índice de Felicidad:</td>
                                        <td>{countryStats.indiceFelicidad.valoracion}</td>
                                    </tr>

                                    <tr>
                                        <td>Representación gráfica:</td>
                                        <td>{countryStats.logoFelicidad}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default StadisticCountry;




