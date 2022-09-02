import { useEffect, useRef, useState } from "react";
import { Carousel } from "../Carousel";
import { swapi } from "../../server/api";

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
    <div id="section-starships">
      <Carousel arrayItems={starships} id={'id-starships'} title='Naves espaciais' />
    </div>
  )
}