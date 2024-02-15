import React,{useContext,useEffect,useState} from "react";
import axios, { all } from 'axios'
import { useFetcher } from "react-router-dom";

const AppContext = React.createContext()

const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const mealUrl = 'https://www.themealdb.com/api.php'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'






const Appprovider = ({children})=>{
const [loading , SetLoading] = useState(false)
  const [meals , setMeal] = useState([])
  const [searchTerm , setsearchTerm] = useState(' ')
  //Modal
  const [showModal , setshowModal] = useState(false)
  const [selectedMeal , setselectedMeal] = useState(null)
  //fav
  const [favorites , setFavorites] = useState([])




  const fetchMeal =  async (url) =>{
    SetLoading(true)
    try {
      const {data} = await axios(url)

      if(data.meals){

        setMeal(data.meals)
      }

      else{
        setMeal([])
      }
      

      
    } catch (error) {
      console.log(error.response)
    }
    SetLoading(false)
  }

const fetchRandomMeal = ()=>{

fetchMeal(randomMealUrl)

}

const closeModal = ()=>{
  setshowModal(false)
}

const selectMeal = (idMeal,favoriteMeal)=>{
  let meal;
  if(favoriteMeal){

    meal = favorites.find((meall) => meall.idMeal ===  idMeal)
  }
  else{
    meal = meals.find((meall) => meall.idMeal ===  idMeal)
  }
 
  setselectedMeal(meal)
  setshowModal(true)
}

const addFavorite = (idMeal)=>{

 
  const alreadyFavorite = favorites.find((mealll)=> mealll.idMeal === idMeal )
  if(alreadyFavorite) return 
  const meal = meals.find((mealll)=> mealll.idMeal === idMeal )
  const updateFavorites = [...favorites,meal]
  setFavorites(updateFavorites)
}


const removefavorite = (idMeal)=>{

  
const removeMeal = favorites.filter((meal) => meal.idMeal !== idMeal)
setFavorites(removeMeal)

  


}



useEffect(()=>{
  fetchMeal(allMealUrl)
},[])




useEffect(()=>{

  if(!searchTerm) return

fetchMeal(`${allMealUrl}${searchTerm}`)
},[searchTerm])



  return <AppContext.Provider value={{meals,loading,setsearchTerm,selectMeal,selectedMeal,showModal,fetchRandomMeal,closeModal,addFavorite,removefavorite,favorites}}>

{children}


  </AppContext.Provider>
}

export const useGlobalContext = () =>{

  return useContext(AppContext)
}



export {AppContext,Appprovider}