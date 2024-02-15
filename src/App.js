import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./Modal";
import Meals from "./Meals";
import Search from "./Search";

import { useGlobalContext } from "./context";

import  './App.css'

import Favourite from "./Favourites";

const App = () => {

const {showModal, favorites} = useGlobalContext()


  return (
   <main>
    <Search />
    {favorites.length > 0 && <Favourite />}


    <Meals />
    
   {showModal && <Modal /> } 
   </main>

  );
}

export default App