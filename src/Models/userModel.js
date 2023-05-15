import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../Views/firebase';


async function createUserModel(email, password) {

    //Aqui ya no se hacen validaciones
    //Porque ya se hicieron en el controlador

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // El usuario se creó exitosamente
            const user = userCredential.user;
            console.log('Usuario creado:', user);
            return user;
        })
        .catch((error) => {
            // Hubo un error al crear el usuario
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al crear usuario:', errorCode, errorMessage);
            return "Error";
        });

}

async function logInModel(email, password) {

    //Aqui ya no se hacen validaciones
    //Porque ya se hicieron en el controlador

    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            const user = userCredential.user;
            console.log('Usuario autenticado:', user);

            return user;

        })
        .catch((error) => {
            // Error al iniciar sesión
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al autenticar:', errorCode, errorMessage);
            return "Error";
        });

}


export { createUserModel, logInModel };