
import React from 'react'
import { useEffect, useState } from 'react';
import './AddCountry.css';
//Para navegar en las rutas
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Funciones de countryController
import { updateCountryById, getCountryById } from '../../../Controllers/countryController';

const EditCountry = () => {
    const navigate = useNavigate()

    //Datos del formulario
    const [pais, setPais] = useState('');
    const [pib, setPib] = useState('');
    const [libertadDecisiones, setLibertadDecisiones] = useState('');
    const [generosidad, setGenerosidad] = useState('');
    const [esperanzaVida, setEsperanzaVida] = useState('');
    const [corrupcion, setCorrupcion] = useState('');
    //Id del objeto original
    const { id } = useParams(); // Obtener el parámetro de la ruta



    const editPais = () => {
        console.log("País a editar: ", id, pais, pib, esperanzaVida, libertadDecisiones, generosidad, corrupcion);

        const data = {
            pais, pib, esperanzaVida, libertadDecisiones, generosidad, corrupcion
        }

        const res = updateCountryById(id, data);

        if (res) {
            console.log("País editado exitosamente");
            navigate('/countries/');
        } else {
            console.log("País NO editado exitosamente");
        }
    }

    const getCountry = async () => {
        const country = await getCountryById(id);

        setPais(country.pais);
        setPib(country.pib);
        setLibertadDecisiones(country.libertadDecisiones);
        setGenerosidad(country.generosidad);
        setEsperanzaVida(country.esperanzaVida);
        setCorrupcion(country.corrupcion);


    };
    useEffect(() => {
        // Llamar a la función auxiliar para cargar los datos
        getCountry();
    }, []);

    return (
        <div id="formCountry">
            <div class="form">
                <div id="formulario">
                    <h1> FORMULARIO </h1>
                </div>

                <div id="tabla-formulario">
                    <label for="nombre">Nombre del país</label>
                    <input onChange={(event) => setPais(event.target.value)} value={pais} placeholder="Ingrese el nombre del país..." name="fnombre" type="text" id="tabla" />

                    <label for="apellido">PIB Per Cápita</label>
                    <input onChange={(event) => setPib(event.target.value)} value={pib} placeholder="Ingrese el PIB per cápita..." name="fapellido" type="text" id="tabla" />

                    <label for="correo">Esperanza de vida </label>
                    <input onChange={(event) => setEsperanzaVida(event.target.value)} value={esperanzaVida} placeholder="Ingrese la esperanza de vida..." name="femail" type="text" id="tabla" />

                    <label for="contra">Libertad de decisiones</label>
                    <input onChange={(event) => setLibertadDecisiones(event.target.value)} value={libertadDecisiones} placeholder="Ingrese la libertad de decisiones..." name="fpassword" type="text" id="tabla" />

                    <label for="fecha">Generosidad </label>
                    <input onChange={(event) => setGenerosidad(event.target.value)} value={generosidad} placeholder="Ingrese el nivel de generosidad..." name="ffechanacimiento" type="text" id="tabla" />

                    <label for="genero">Corrupción</label>
                    <input onChange={(event) => setCorrupcion(event.target.value)} value={corrupcion} placeholder="Escriba el nivel de corrupción..." name="fgenero" type="text" id="tabla" />

                </div>
                <button name="registro" id="button" onClick={editPais}> ¡Agregar País! </button>
            </div>
        </div>

    );
}


export default EditCountry;




