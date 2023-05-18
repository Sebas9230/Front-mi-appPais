//auth solo guarda datos básicos (email, password)
//Creacion para el back y gestion de estados para el front (sign in, logout)
import { authFirebase, signInWithEmailAndPassword } from "../Views/firebase";

//Ruta para la api
const RUTA_SERVIDOR = `${process.env.REACT_APP_RUTA_API}`;


// ********************************Sign in original*********************************


//Todo esto llama a la API
//CREATE

async function createUserModel(email, password, isAdmin) {

    try {

console.log("RUTA: ", RUTA_SERVIDOR);
        const response = await fetch(`${RUTA_SERVIDOR}/users/create`, {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({ email, password, isAdmin })

        });




        //Si la respuesta no es satisfactoria

        if (!response.ok) {

            throw new Error('Error creating user.');

        }

        const user = await response.json();

        return user;


    } catch (error) {

        throw error;

    }

}




async function logInModel(email, password) {

    try {

        // directo llama al metodo frebase
        const res = await signInWithEmailAndPassword(authFirebase, email, password);

        const user = res.user;

        const uid = user.uid;

        // acá llama al api
        const resApi = await fetch(`${RUTA_SERVIDOR}/users/user/${uid}`);




        // Comprueba si la respuesta de la API es exitosa

        if (resApi.ok) {

            // Parsea la respuesta a JSON

            let userData = await resApi.json();

            // Retornar el usuario para que pueda ser utilizado en la lógica de la aplicación

            return userData;

        } else {

            throw new Error("¡Unknow Error!");

        }

    } catch (error) {

        throw error;

    }

}




async function signOut() {

    try {

        // Llamar a la función de signOut proporcionada por Firebase Authentication

        // metodo directo firebase
        await authFirebase.signOut();

        return true;

    } catch (error) {

        // Manejo de errores en caso de fallo al cerrar sesión

        throw error;

    }

}




async function deleteUserById(id) {

    try {

        const response = await fetch(`${RUTA_SERVIDOR}/users/delete/${id}`, {

            method: 'DELETE'

        });

        if (!response.ok) {

            throw new Error('Error deleting user.');

        }

        const data = await response.text();

        return data;

    } catch (error) {

        throw error;

    }

}





const getAllUsers = async () => {

    try {

        const response = await fetch(`${RUTA_SERVIDOR}/users/`);

        if (!response.ok) {

            throw new Error('Error fetching users');

        }


        const data = await response.json();

        return data;

    } catch (error) {

        throw error;

    }

};




const getUser = async (id) => {

    try {

        const response = await fetch(`${RUTA_SERVIDOR}/users/user/${id}`);

        if (!response.ok) {

            throw new Error('Unable to find user.');

        }

        const user = await response.json();

        return user;

    } catch (error) {

        throw error;

    }

};




const updateUser = async (id, email, password, isAdmin) => {

    try {


        const response = await fetch(`${RUTA_SERVIDOR}/users/update`, {

            method: 'PUT',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({ uid: id, email, password, isAdmin})

        });




        if (!response.ok) {

            throw new Error('Error updating user');

        }

        return response.ok;




    } catch (error) {

        throw error;

    }

};




export { getAllUsers, getUser, updateUser, createUserModel, deleteUserById, logInModel, signOut };