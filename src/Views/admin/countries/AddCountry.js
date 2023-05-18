
import React from 'react'
import { useEffect, useState } from 'react';
import './AddCountry.css';
//Para navegar en las rutas
import { useNavigate } from 'react-router-dom'

//Funciones de countryController
import { createACountry } from '../../../Controllers/countryController';
const AddCountry = () => {
    const navigate = useNavigate()

    //Datos del formulario
    const [pais, setPais] = useState('');
    const [pib, setPib] = useState('');
    const [libertadDecisiones, setLibertadDecisiones] = useState('');
    const [generosidad, setGenerosidad] = useState('');
    const [esperanzaVida, setEsperanzaVida] = useState('');
    const [corrupcion, setCorrupcion] = useState('');

    const [countries, setCountries] = useState([]);

    const addPais = () => {
        console.log("País a crear: ", pais, pib, esperanzaVida, libertadDecisiones, generosidad, corrupcion);

        const data = {
            pais, pib, esperanzaVida, libertadDecisiones, generosidad, corrupcion
        }

        const res = createACountry(data);
        if (res) {
            console.log("País añadido exitosamente");
            navigate('/countries/');
        } else {
            console.log("País NO añadido exitosamente");
        }
    }

    return (
        <div id="formCountry">
            <div class="form">
                <div id="formulario">
                    <h1> FORMULARIO </h1>
                </div>

                <div id="tabla-formulario">
                    <label for="nombre">Nombre del país</label>
                    <input onChange={(event) => setPais(event.target.value)} placeholder="Ingrese el nombre del país..." name="fnombre" type="text" id="tabla" />

                    <label for="apellido">PIB Per Cápita</label>
                    <input onChange={(event) => setPib(event.target.value)} placeholder="Ingrese el PIB per cápita..." name="fapellido" type="text" id="tabla" />

                    <label for="correo">Esperanza de vida </label>
                    <input onChange={(event) => setEsperanzaVida(event.target.value)} placeholder="Ingrese la esperanza de vida..." name="femail" type="text" id="tabla" />

                    <label for="contra">Libertad de decisiones</label>
                    <input onChange={(event) => setLibertadDecisiones(event.target.value)} placeholder="Ingrese la libertad de decisiones..." name="fpassword" type="text" id="tabla" />

                    <label for="fecha">Generosidad </label>
                    <input onChange={(event) => setGenerosidad(event.target.value)} placeholder="Ingrese el nivel de generosidad..." name="ffechanacimiento" type="text" id="tabla" />

                    <label for="genero">Corrupción</label>
                    <input onChange={(event) => setCorrupcion(event.target.value)} placeholder="Escriba el nivel de corrupción..." name="fgenero" type="text" id="tabla" />

                </div>
                <button name="registro" id="button" onClick={addPais}> ¡Agregar País! </button>
            </div>
        </div>

    );
}


export default AddCountry;




