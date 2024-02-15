import { useState } from "react";
import { useGlobalContext } from "./context";


const Modal = ()=>{
  

const {selectedMeal , closeModal } = useGlobalContext()

const {strMealThumb:image , strMeal:title, strInstructions:text , strSource:source} = selectedMeal

return (

<aside className="modal-overlay"> 

<div className="modal-container">

 <img src={image} className="img modal-img" alt={title} />

 <div className="modal-content">
<h4>{title}</h4>
<p1>Instructions</p1>
<p>{text}</p>
<a href={source} target="_blank" >Source</a>
 
  <button className="close-btn" onClick={closeModal}> Close</button>
  </div>
</div>


 </aside>
  );
}


export default Modal