import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPoverties, getCountries } from '../../Controllers/countryController';

const TablePoverty = () => {
    const [poverties, setPoverties] = useState([]);

    const listPoverties = () => {
        return poverties.map((poverty) => (
            <tr key={poverty.id}>
                <td>{1}</td>
                <td>{poverty.countryData.pais}</td>
                <td>{poverty.countryData.pib}</td>
                <td>{poverty.dimensionPais}</td>
                <td>{poverty.poblacionMetroCuadrado}</td>
                <td>{(poverty.countryData.pib * 0.5)/(poverty.poblacionMetroCuadrado * poverty.dimensionPais)}</td>
            </tr>
        ));
    };


    const fetchData = async () => {
        try {
            const responsePoverties = await getAllPoverties();
            console.log("responsePoverties: ", responsePoverties);
            setPoverties(responsePoverties);
        } catch (error) {
            console.error('Error al cargar la pobreza desde interfaz:', error);
        }
    };

    useEffect(() => {
        fetchData();
        console.log("Poverties: ", poverties);
    }, []);

    return (
        <>
            <div className="container">
                <div className="masthead">
                    <input type="text" id="buscar" placeholder="Buscar en tabla" title="Empieza a escribir para buscar" />
                    <div className="table-responsive">
                        <table className="table" id="tabla" data-sort="table">
                            <thead>
                                <tr>
                                    {/* <th><button onClick={goToCreateCountry}>Crear</button></th> */}
                                </tr>
                                <tr>
                                    <th>Item</th>
                                    <th>País</th>
                                    <th>Pib</th>
                                    <th>Dimension Pais Km2</th>
                                    <th>Poblacion / Km Cuadrado</th>
                                    <th>Valoración Económica</th>
                                </tr>
                            </thead>
                            <tbody>{listPoverties()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TablePoverty;
