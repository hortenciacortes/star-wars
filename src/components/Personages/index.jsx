import { useEffect, useRef, useState } from "react";
import { swapi } from "../../server/api";
import loading from '../../assets/loading.gif';
import './styles.css';

export function Personages() {
  const [people, setPeople] = useState([]);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if(people.length === 0) {
      for(let i = 1; i <= 9; i++){
        swapi.get(`/people/?page=${i}`)
        .then(response => setPeople(prevent => [...prevent, ...response.data.results]))
        .catch((err) => console.error(err));
      }
    }
  }, [])
  
  
  return(
    <section className="grid-pattern">
      <div className="container">
        <h2>Personagens do universo de Star Wars ({people.length}):</h2>
        <ul>
          {people.map(item => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>

      {people.length <= 0 && 
        <div className="loading">
          <img src={loading} alt="Carregando" />
        </div>
      }
    </section>
  )
}