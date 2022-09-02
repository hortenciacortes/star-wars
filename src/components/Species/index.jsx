import { useEffect, useRef, useState } from "react";
import { Carousel } from "../Carousel";
import { swapi } from "../../server/api";

export function Species() {
  const [species, setSpecies] = useState([]);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if(species.length === 0) {
      for(let i = 1; i <= 4; i++){
        swapi.get(`/species/?page=${i}`)
        .then(response => setSpecies(prevent => [...prevent, ...response.data.results]))
        .catch((err) => console.error(err));
      }
    }
  }, [])
  
  return(
    <div id="section-species">
      <Carousel arrayItems={species} id={'id-species'} title='Espécieis' />
    </div>
  )
}