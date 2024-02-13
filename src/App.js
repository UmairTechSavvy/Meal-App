import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./Modal";
import Meals from "./Meals";
import Search from "./Search";

import  './App.css'

import Favourite from "./Favourites";

const App = () => {
  return (
   <main>
    {/*<Search />*/}
    {/*<Favourite />*/}

    <Meals />
    
    {/*<Modal />*/}
   </main>

  );
}

export default App