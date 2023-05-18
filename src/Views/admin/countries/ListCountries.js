
import React from 'react'
import { useEffect, useState } from 'react';

//Para navegar en las rutas
import { useNavigate } from 'react-router-dom'

//Funciones de countryController
import { getCountries } from '../../../Controllers/countryController';

import { deleteCountry } from '../../../Controllers/countryController';

const ListCountries = () => {
    const navigate = useNavigate()


    const [countries, setCountries] = useState([]);

    const goToCreateCountry = () =>{
        navigate("/countries/new");
    }

    const goToEditCountry = (id)=>{
        navigate(`/countries/edit/${id}`);
    }

    // Función auxiliar para cargar los datos de la API
    const loadCountries = async () => {
        try {
            const response = await getCountries();
            setCountries(response);
        } catch (error) {
            console.error('Error al cargar países desde interfaz:', error);
        }
    };

    const removeCountry=(id)=>{
        const res = deleteCountry(id);
        if(res){
            console.log('Country eliminada correctamente.');
            navigate('/countries/');
        }
    }
    
    const listCountries = () => {
        return countries.map(country => (
            <tr key={country.id}>
                <td>{1}</td>
                <td>{country.pais}</td>
                <td>{country.pib}</td>
                <td>{country.esperanzaVida}</td>
                <td>{country.libertadDecisiones}</td>
                <td>{country.generosidad}</td>
                <td>{country.corrupcion}</td>
                <td>{country.valor}</td>
                <td><button onClick={() => goToEditCountry(country.id) }>Editar</button></td>
                <td><button onClick={() => removeCountry(country.id) }>Eliminar</button></td>
            </tr>
        ));
    };
    useEffect(() => {
        // Llamar a la función auxiliar para cargar los datos
        loadCountries();
    }, []);

    return (
        <>

            <div class="container">

                <div class="masthead">

                    <input type="text" id="buscar" onkeyup="buscar()" placeholder="Buscar en tabla" title="Empieza a escribir para buscar" />

                    <div class="table-responsive">
                        <table class="table" id="tabla" data-sort="table">
                            <thead>
                                <tr>
                                    <th><button onClick={goToCreateCountry}>Crear</button></th>
                                </tr>
                                <tr>
                                    <th>Item</th>
                                    <th>País</th>
                                    <th>PIB per cápita</th>
                                    <th>Esperanza de vida</th>
                                    <th>Libertad de decisiones</th>
                                    <th>Generosidad </th>
                                    <th>Corrupción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCountries()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>

    );
}


export default ListCountries;




