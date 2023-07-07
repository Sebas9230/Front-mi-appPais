//auth solo guarda datos básicos (email, password)
//Creacion para el back y gestion de estados para el front (sign in, logout)
//import { authFirebase, signInWithEmailAndPassword } from "../Views/firebase";

//Ruta para la api
const RUTA_SERVIDOR = `${process.env.REACT_APP_RUTA_API}`;


// ********************************Sign in original*********************************


//Todo esto llama a la API
//CREATE

async function createCountryModel(countryData) {
    const { pais, pib, esperanzaVida, libertadDecisiones, generosidad, corrupcion, poblacionMetroCuadrado, dimensionPais } = countryData;

    try {
        console.log("COUNTRY EN MODEL: ", pais, pib, esperanzaVida, libertadDecisiones, generosidad, corrupcion);
        console.log("POBREZA EN MODEL: ", poblacionMetroCuadrado, dimensionPais);
        const response = await fetch(`${RUTA_SERVIDOR}/countries/create`, {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({ pais, pib, esperanzaVida, libertadDecisiones, generosidad, corrupcion, poblacionMetroCuadrado, dimensionPais })

        });




        //Si la respuesta no es satisfactoria

        if (!response.ok) {

            throw new Error('Error creating country.');

        }

        const country = await response.json();

        return country;


    } catch (error) {

        throw error;

    }

}


async function getPoverties() {
    try {

        const response = await fetch(`${RUTA_SERVIDOR}/countries/poverty`);

        if (!response.ok) {

            throw new Error('Error fetching poverties');

        }


        const data = await response.json();

        return data;

    } catch (error) {

        throw error;

    }

}


async function deleteCountryById(id) {

    try {

        const response = await fetch(`${RUTA_SERVIDOR}/countries/delete/${id}`, {

            method: 'DELETE'

        });

        if (!response.ok) {

            throw new Error('Error deleting country.');

        }

        const data = await response.text();

        return data;

    } catch (error) {

        throw error;

    }

}


const getAllCountries = async () => {

    try {

        const response = await fetch(`${RUTA_SERVIDOR}/countries/`);

        if (!response.ok) {

            throw new Error('Error fetching countries');

        }


        const data = await response.json();

        return data;

    } catch (error) {

        throw error;

    }

};




const getCountry = async (id) => {

    try {

        const response = await fetch(`${RUTA_SERVIDOR}/countries/country/${id}`);

        if (!response.ok) {

            throw new Error('Unable to find country.');

        }

        const country = await response.json();

        return country;

    } catch (error) {

        throw error;

    }

};




const updateCountry = async (id, data) => {

    try {

        const { pais, pib, esperanzaVida, libertadDecisiones, generosidad, corrupcion } = data;
        const response = await fetch(`${RUTA_SERVIDOR}/countries/update`, {

            method: 'PUT',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({ id, pais, pib, esperanzaVida, libertadDecisiones, generosidad, corrupcion })

        });




        if (!response.ok) {

            throw new Error('Error updating country');

        }

        return response.ok;




    } catch (error) {

        throw error;

    }

};




export { createCountryModel, deleteCountryById, getAllCountries, getCountry, updateCountry, getPoverties };