import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { Personages } from "../../components/Personages";
import { Starships } from "../../components/Starships";


export function Home() {
  return (
    <>
      <Header />
      <Cards />
      <Personages />
      <Starships />
    </>
  );
}
