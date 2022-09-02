import { useEffect, useRef, useState } from "react";
import { Carousel } from "../Carousel";
import { swapi } from "../../server/api";

export function Planets() {
  const [planets, setPlanets] = useState([]);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if(planets.length === 0) {
      for(let i = 1; i <= 6; i++){
        swapi.get(`/planets/?page=${i}`)
        .then(response => setPlanets(prevent => [...prevent, ...response.data.results]))
        .catch((err) => console.error(err));
      }
    }
  }, [])
  
  return(
    <div id="section-planets">
      <Carousel arrayItems={planets} id={'id-planets'} title='Planetas' />
    </div>
  )
}