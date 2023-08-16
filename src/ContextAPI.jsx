import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

export const DataContext = createContext();

export function DataProvider({children}) {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(res=>setData(res.data))
    },[])
    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

// export function useData() {
//   return useContext(DataContext);
// }

// export function DataProvider({ children }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error('Error fetching data:', error));
      
//   }, []);

//   const value = {
//     data,
//   };

//   return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
// }
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return <ThemeContext.Provider value={{isDarkTheme,toggleTheme}}>{children}</ThemeContext.Provider>;
}


