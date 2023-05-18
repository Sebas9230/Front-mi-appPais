

import { createCountryModel, deleteCountryById, getAllCountries, getCountry, updateCountry } from "../Models/countryModel";

const createACountry = async (countryData) => {
    try {
        console.log("countryData Controller: ", countryData);
        const res = await createCountryModel(countryData);

        if (!res) {
            console.error("Error creating country.");
            return false;
        }
        return res;
    } catch (error) {
        console.error(error);
        return false;
    }

}

const getCountries = async () => {
    try {
        const countries = await getAllCountries();

        if (!countries) {
            console.error("Error getting countries");
            return false;
        }

        return countries;
    } catch (error) {
        console.error(error);
        return false;
    }

}

const getCountryById = async (id) => {
    try {
        const country = await getCountry(id);

        if (!country) {
            console.error("Error getting country.");
            return false;
        }

        return country;
    } catch (error) {
        console.error(error);
        return false;
    }

}

const deleteCountry = async (id) => {
    try {
        const res = await deleteCountryById(id);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }


}

const updateCountryById = async (id, data) => {
    try {
        const res = await updateCountry(id, data);

        if (!res) {
            throw new Error("¡Unknow Error!");
        }
        return true;
    }catch(error){
        return false;
    }
    
}

export { createACountry, getCountries, getCountryById, deleteCountry, updateCountryById };