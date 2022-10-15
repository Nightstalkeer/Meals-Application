import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();


const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';


const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);

  /* Below method used fetch API */

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://randomuser.me/api/');
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])


  /* Below method used AXIOS package */

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals(data.meals);
      }
      else {
        setMeals([]);
      }
      // console.log(data);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);


  return <AppContext.Provider value={{ loading, meals }} >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}


export { AppContext, AppProvider };