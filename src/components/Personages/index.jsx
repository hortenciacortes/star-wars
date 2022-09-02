import { useEffect, useRef, useState } from "react";
import { swapi } from "../../server/api";
import './styles.css';
import { Carousel } from "../Carousel";

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
    <div id="section-personages">
      <Carousel arrayItems={people} id={'id-people'} title='Personagens' />
    </div>
  )
}