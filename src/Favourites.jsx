import { useState } from "react";
import { useGlobalContext } from "./context";


const Favourite = ()=>{

  const {favorites , selectMeal , removefavorite} = useGlobalContext()

  return <section className="favorite">
    <div className="favorites-content"> 
    <h5>Favorite</h5>
    <div className="favorites-container">

{favorites.map((item)=>{
  const {idMeal , strMealThumb:image} = item

  return <div key={idMeal} className="favorite-item" >

<img src={image} className="favorite-img" onClick={()=> selectMeal(idMeal)} />

<button className="favorite-btn" onClick={()=> removefavorite(idMeal)}>Remove</button>

  </div>
})}


    </div>
    </div>
  </section>
}



export default Favourite