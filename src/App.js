//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from "react";
import CrudApp from "./Views/admin/users/CrudApp";
import AddCountry from "../src/Views/admin/countries/AddCountry";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Login from "../src/Views/Login";
import NavBar from '../src/Views/navBar';

import { useState, useEffect } from 'react';
import { authFirebase } from '../src/Views/firebase';

//rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import HomeAdmin from './Views/admin/HomeAdmin';
import ListCountries from './Views/admin/countries/ListCountries';
import EditCountry  from "./Views/admin/countries/EditCountry";



function App() {

  const mystyle = {
    padding: "20px"
  }
  const [currentUser, setCurrentUser] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    const unsubscribe = authFirebase.onAuthStateChanged((user) => {
      setCurrentUser(user);

      if (!user) {
        console.log("Usuario no autenticado");
        setRedirectToHome(true);
      }else{
        setRedirectToHome(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/nav" element={<NavBar/>} />
          {/* Para usuarios administradores */}
          <Route path="/homeAdmin" element={<HomeAdmin/>} />
          <Route path="/users/" element={<CrudApp/>} />
          <Route path="/countries/" element={<ListCountries/>} />
          <Route path="/countries/new" element={<AddCountry/>} />
          <Route path="/countries/edit/:id" element={<EditCountry/>} />
          {/* Para usuarios normales */}
          <Route path="/home" element={<home/>} />
          {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}

        </Routes>
        {redirectToHome && <Navigate to="/" />}
      </BrowserRouter>
      
    </>


  );
}


export default App;
