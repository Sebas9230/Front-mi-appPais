import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'

const initialForm = {
    id: null,
    name: "",
    constellation: "",
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState({initialForm});

    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    },[dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        console.log('form> ',form)
        e.preventDefault();
        if(!form.name||!form.constellation){
            alert("Datos incompletos");
            return;
        }

        if (form.id === null || form.id == undefined) {
            console.log('f')
            createData(form);
        }else{

            console.log('f2;' , form.id)
            updateData(form);
        }

        handleReset();
    };
        
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

  return (
    <div>
      <h3>{dataToEdit? "Editar":"Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Nombre' onChange={handleChange} value={form.name} />
        <input type="text" name="constellation" placeholder='Constelacion' onChange={handleChange} value={form.constellation}/>
        <input type="submit" value="Enviar"/>
        <input type="reset" value="Limpiar" onClick={handleReset}/>
      </form>
    </div>
  )
}

export default CrudForm
