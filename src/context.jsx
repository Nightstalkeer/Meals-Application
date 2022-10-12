import React, { useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext();


const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';


const AppProvider = ({ children }) => {

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
    try {
      const response = await axios(url);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, [])


  return <AppContext.Provider value={{ name: 'john', role: 'student' }} >
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}


export { AppContext, AppProvider };