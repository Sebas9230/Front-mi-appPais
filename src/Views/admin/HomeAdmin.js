import React from 'react'
import CrudApp from './users/CrudApp';
import './HomeAdminStyles.css';
//Para navegar en las rutas
import { useNavigate } from 'react-router-dom'

const HomeAdmin = () => {
    const navigate = useNavigate()

    const goToUsers = () => {
        navigate('/users/');
    }


    const goToCountries = () => {
        navigate('/countries/');
    }

    return (
        <>
            <h1>Hola Bienvenido!</h1>
            <h2>Ingreso usuario administrador</h2>
            <ul class="cards">
                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--fence"></div>
                        <div class="card__content">
                            <div class="card__title">Usuarios</div>
                            <p class="card__text">Maneja las operaciones de crud de usuarios</p>
                            <button onClick={goToUsers} class="btn btn--block card__btn">Gestionar usuarios</button>
                        </div>
                    </div>
                </li>

                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--flowers"></div>
                        <div class="card__content">
                            <div class="card__title">PAISES</div>
                            <p class="card__text">Maneja las operaciones de crud de los paises</p>
                            <button onClick={goToCountries} class="btn btn--block card__btn">Gestionar paises</button>
                        </div>
                    </div>
                </li>
            </ul>


        </>

    );
}


export default HomeAdmin;