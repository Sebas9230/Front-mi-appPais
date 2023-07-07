import React from 'react';

export function calcularLogoFelicidad(pais) {
  const felicidad = pais.indiceFelicidad.valoracion;

  if (felicidad == 'Muy feliz') {
    return <img src="/Muy Feliz.png" alt="Muy feliz" style={{ width: '25px', height: '25px' }} />;
  } else if (felicidad == 'Feliz') {
    return <img src="/Feliz.png" alt="Feliz" style={{ width: '25px', height: '25px' }} />;
  } else if (felicidad == 'Moderadamente feliz') {
    return <img src="/Moderadamente Feliz.png" alt="Moderadamente feliz" style={{ width: '25px', height: '25px' }}/>;
  } else if (felicidad == 'Poco Feliz') {
    return <img src="/Poco Feliz.png" alt="Poco Feliz" style={{ width: '25px', height: '25px' }} />;
  } else {
    return <img src="/Infeliz.png" alt="Infeliz" style={{ width: '25px', height: '25px' }}/>;
    //return felicidad;
  }
}
