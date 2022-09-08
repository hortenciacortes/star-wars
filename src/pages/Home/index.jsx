import { useContext } from "react";
import { Cards } from "../../components/Cards";
import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { GlobalContext } from "../../GlobalContext";

export function Home() {
  const global = useContext(GlobalContext); 

  return (
    <>
      <Header />
      <Cards />
      <Carousel arrayItems={global.people} id={'id-people'} title='Personagens' />
      <Carousel arrayItems={global.species} id={'id-species'} title='Espécies' />
      <Carousel arrayItems={global.planets} id={'id-planets'} title='Planetas' />
      <Carousel arrayItems={global.starships} id={'id-starships'} title='Naves espaciais' />
    </>
  );
}
