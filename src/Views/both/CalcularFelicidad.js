import React from 'react';

export function calcularNivelFelicidad(pais) {
    let puntaje = (pais.pib * 0.4) + (pais.esperanzaVida * 0.3) + (pais.libertadDecisiones * 0.1) + (pais.generosidad * 0.1) + (pais.corrupcion * 0.1);

    // Rangos de penalización valores
    if (pais.pib <= 1.000 || pais.esperanzaVida <= 0.300 || pais.libertadDecisiones <= 0.400 || pais.generosidad <= 0.100 || pais.corrupcion <= 0.080) {
        puntaje *= 0.75;
    }

    // Rangos de penalización
    if (pais.pib === 0 || pais.esperanzaVida === 0 || pais.libertadDecisiones === 0 || pais.generosidad === 0 || pais.corrupcion === 0) {
        puntaje *= 0.5;
    }

    let valoracion = "";

    // Evaluacion nivel de felicidad
    if (puntaje >= 0.8) {
        valoracion = 'Muy feliz';
    } else if (puntaje >= 0.6) {
        valoracion = 'Feliz';
    } else if (puntaje >= 0.4) {
        valoracion = 'Moderadamente feliz';
    } else if (puntaje >= 0.2) {
        valoracion = 'Poco Feliz';
    } else {
        valoracion = 'Infeliz';
    }

    return {
        valor: puntaje.toFixed(2),
        valoracion: valoracion
    };
}
