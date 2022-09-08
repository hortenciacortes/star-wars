import React from "react";
import { swapi } from "./server/api";

export const GlobalContext = React.createContext();

export function GlobalStorage({ children }) { 
  const firstRenderRef = React.useRef(true);
  const [people, setPeople] = React.useState([]);
  const [species, setSpecies] = React.useState([]);
  const [planets, setPlanets] = React.useState([]);
  const [starships, setStarships] = React.useState([]);
  const arrayRoot = ['People', 'Species', 'Planets', 'Starships']
  
  React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    
    arrayRoot.forEach(root => {
      swapi.get(`/${root.toLowerCase()}/`)
      .then(response => getInfo(root, Math.ceil(response.data.count / 10)))
      .catch((err) => console.error(err));
    })
    
    function getInfo(root, count) {
      if(eval(root.toLowerCase()).length === 0) {
        for(let i = 1; i <= count; i++){
          swapi.get(`/${root.toLowerCase()}/?page=${i}`)
          .then(response => {
            eval('set' + root)(prevent => [...prevent, ...response.data.results]);
          })
          .catch((err) => console.error(err));
        }
      }
    }
  }, [])
  
  return(
    <GlobalContext.Provider value={{ people, species, planets, starships }}>
      {children}
    </GlobalContext.Provider>
  )
}