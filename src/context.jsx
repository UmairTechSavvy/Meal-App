import React,{useContext,useEffect,useState} from "react";
import axios, { all } from 'axios'

const AppContext = React.createContext()

const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const mealUrl = 'https://www.themealdb.com/api.php'






const Appprovider = ({children})=>{

  const [meals , setMeal] = useState([])




  const fetchMeal =  async (url) =>{
    try {
      const {data} = await axios(url)
      setMeal(data.meals)

      
    } catch (error) {
      console.log(error.response)
    }
  }



useEffect(()=>{

fetchMeal(allMealUrl)
},[])



  return <AppContext.Provider value={{meals}}>

{children}


  </AppContext.Provider>
}

export const useGlobalContext = () =>{

  return useContext(AppContext)
}



export {AppContext,Appprovider}