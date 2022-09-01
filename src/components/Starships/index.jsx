import { useEffect, useRef, useState } from "react";
import { swapi } from "../../server/api";
import './styles.css';

export function Starships() {
  const [starships, setStarships] = useState([]);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if(starships.length === 0) {
      for(let i = 1; i <= 4; i++){
        swapi.get(`/starships/?page=${i}`)
        .then(response => setStarships(prevent => [...prevent, ...response.data.results]))
        .catch((err) => console.error(err));
      }
    }
  }, [])
  
  
  return(
    <section className="grid-pattern">
      <div className="cointainer">
        <h2>Naves espaciais do universo de Star Wars ({starships.length}):</h2>
        <ul>
          {starships.map(item => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}