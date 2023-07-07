import React from 'react'
import CrudApp from '../admin/users/CrudApp';
import '../admin/HomeAdminStyles.css';
//Para navegar en las rutas
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const goToListCountries = () => {
        navigate('/listcountries/');
    }

    const goToStadisticCountry = () => {
        navigate('/stadisticcountry/');
    }

    const goToCompareCountries = () => {
        navigate('/comparecountries/');
    }

    const goToTablePoverty = () => {
        navigate('/tablepoverty/');
    }

    const goToTableTest = () => {
        navigate('/tabletest/');
    }


    return (
        <>
            <h1>Hola Bienvenido!</h1>
            <h2>Ingreso Usuario Autentificado</h2>
            <ul class="cards">
                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--river"></div>
                        <div class="card__content">
                            <div class="card__title">LISTA PAISES</div>
                            <p class="card__text">Lista de paises y respectivas estadísticas</p>
                            <button onClick={goToListCountries} class="btn btn--block card__btn">Listar paises</button>
                        </div>
                    </div>
                </li>

                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--record"></div>
                        <div class="card__content">
                            <div class="card__title">ESTADÍSTICA PAÍS</div>
                            <p class="card__text">Muestra estadísticas del país seleccionado</p>
                            <button onClick={goToStadisticCountry} class="btn btn--block card__btn">Índice de felicidad de un país</button>
                        </div>
                    </div>
                </li>

                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--landscape"></div>
                        <div class="card__content">
                            <div class="card__title">COMPARACIÓN PAISES</div>

                            <p class="card__text">*Compara dos países y su índice de felicidad*</p>
                            <button onClick={goToCompareCountries} class="btn btn--block card__btn">Comparar paises</button>
                        </div>
                    </div>
                </li>

                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--sadness"></div>
                        <div class="card__content">
                            <div class="card__title">POBREZA PAISES</div>

                            <p class="card__text">Lista de paises y estadísticas de pobreza</p>
                            <button onClick={goToTablePoverty} class="btn btn--block card__btn">Listar pobreza en paises</button>
                        </div>
                    </div>
                </li>

                <li class="cards__item">
                    <div class="card">
                        <div class="card__image card__image--test"></div>
                        <div class="card__content">
                            <div class="card__title">FILTRAR PAISES</div>

                            <p class="card__text">Filtra los paises según valor de estadísticas</p>
                            <button onClick={goToTableTest} class="btn btn--block card__btn">Filtrar paises</button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
}


export default Home;