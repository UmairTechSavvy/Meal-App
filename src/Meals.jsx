import { useGlobalContext } from "./context";
import "./App.css";
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { meals , loading,selectMeal,addFavorite,removeFavorite } = useGlobalContext();

if(loading){
  
    return <section className="section">
  <h1>Loading........</h1>
    </section>
    
}

if(meals.length < 1 ){
  return <section>
    <h2>No meals match.please try again</h2>
  </section>
}





  return (
    <section className="section-center">
      {meals.map((eachMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = eachMeal;

        return (
          <article key={idMeal} className="single-meal">
            <img src={image} className="img" onClick={()=> selectMeal(idMeal)}/>

            <footer className="footer">
              <h4>{title}</h4>
              <button className="like-btn" onClick={()=> addFavorite(idMeal)}>
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>




  );
};

export default Meals;
