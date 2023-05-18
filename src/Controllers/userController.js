import { getAllUsers, getUser, updateUser, createUserModel, deleteUserById, logInModel, signOut } from "../Models/usersModel.js";


// async function createUser(userData) {

//     const { email, password } = userData;

//     //Recibes datos y los validas
//     //Validar que el nombre no tenga números

//     //Una vez que cumple con las validaciones
//     const res = await createUserModel(email, password);

//     if (res == "Error") {
//         throw Error;
//     }

//     return res;
// }


// async function logIn(userData) {
//     const { email, password } = userData;

//     //Recibes datos y los validas
//     //Validar que el nombre no tenga números

//     //Una vez que cumple con las validaciones
//     const res = await logInModel(email, password);

//     if (res == "Error") {
//         throw Error;
//     }

//     return res;
// }


const createUser = async (email, password, isAdmin) => {

    try {

        const res = await createUserModel(email, password, isAdmin);

        return res;

    } catch (error) {

        console.error("Error creating user: ", error);

        return false;

    }




}





const logIn = async (email, password) => {

    try {

        const res = await logInModel(email, password);

        if (res) {

            //Setear item en Local Storage (Navegdor)
            localStorage.setItem('user', JSON.stringify(res));

            localStorage.setItem("logeado", true)


            return res;

        } else {

            console.error("Error al logear");

            return false;

        }

    } catch (error) {

        console.error(error);

        return false;

    }

}




const logOut = async () => {

    try {

        const res = await signOut();




        if (res) {

            //El cierre fue exitoso
            const emptyUser = { uid: "", email: "", password: "", isAdmin: "" };

            localStorage.setItem('user', JSON.stringify(emptyUser));

            localStorage.setItem("logeado", true)



        } else {

            console.error("Unable to log out.");

            return false;

        }

    } catch (error) {

        console.error(error);

        return false;

    }

}




const deleteUser = async (id) => {

    try {

        const res = await deleteUserById(id);

        return true;

    } catch (error) {

        return false;

    }





}




const getUsers = async () => {

    try {


        const users = await getAllUsers();

        return users;


    } catch (error) {

        return false;

    }




}


const getUserById = async (id) => {

    try {

        const user = await getUser(id);

        return user;

    } catch (error) {

        return false;

    }

}


const update = async (id, email, password, isAdmin) => {

    try {

        const res = await updateUser(id, email, password, isAdmin);


        if (!res) {

            throw new Error("¡Unknow Error!");

        }

        return true;

    } catch (error) {

        return false;

    }
}

export { getUsers, getUserById, update, createUser, deleteUser, logIn, logOut };