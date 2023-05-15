import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'

const initialForm = {
    id: null,
    name: "",
    constellation: "",
}

const CrudForm = ({createData, upData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState({initialForm});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.name||!form.constellation){
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        }else{
            upData(form);
        }

        handleReset();
    };
        
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

  return (
    <div>
      <h3>Agregar</h3>
      <form>
        <input type="text" name="name" placeholder='Nombre' onChange={handleChange} value={form.name} />
        <input type="text" name="constellation" placeholder='Constelacion' onChange={handleChange} value={form.constellation}/>
        <input type="submit" value="Enviar"/>
        <input type="reset" value="Limpiar" onClick={handleReset}/>
      </form>
    </div>
  )
}

export default CrudForm
