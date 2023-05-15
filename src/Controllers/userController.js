import { createUserModel, logInModel } from '../Models/userModel.js';

async function createUser(userData) {

    const { email, password } = userData;

    //Recibes datos y los validas
    //Validar que el nombre no tenga números

    //Una vez que cumple con las validaciones
    const res = await createUserModel(email, password);

    if (res == "Error") {
        throw Error;
    }

    return res;
}


async function logIn(userData) {
    const { email, password } = userData;

    //Recibes datos y los validas
    //Validar que el nombre no tenga números

    //Una vez que cumple con las validaciones
    const res = await logInModel(email, password);

    if (res == "Error") {
        throw Error;
    }

    return res;
}

export { createUser, logIn };