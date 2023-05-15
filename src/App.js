import React from "react";
import CrudApp from "./Views/CrudApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Login from "../src/Views/Login";
import NavBar from '../src/Views/navBar';

import { useState, useEffect } from 'react';
import { auth } from '../src/Views/firebase';

//rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';




function App() {

  const mystyle = {
    padding: "20px"
  }
  const [currentUser, setCurrentUser] = useState(null);
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      if (!user) {
        console.log("Usuario no autenticado");
        console.log("locacion: ", window.location);
        setRedirectToHome(true);
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
          <Route path="/home" element={<CrudApp />} />
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
