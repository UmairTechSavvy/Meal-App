
import { useGlobalContext } from "./context";
import './App.css';
import {BsHandThumbsUp} from 'react-icons/bs'


const Meals = () =>{
const {meals} = useGlobalContext()

  return(

    <section className="section-center">

{meals.map((eachMeal)=>{
const {idMeal ,strMeal:title , strMealThumb:image} = eachMeal

return (


<article key={idMeal}   className="single-meal">

<img src={image} className="img"  />

<footer className="footer">
  <h4>{title}</h4> 
  <button className="like-btn"><BsHandThumbsUp /></button>
</footer>

</article>



);

})}

    </section>



  );
}

export default Meals