import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";
import { Personages } from "../../components/Personages";
import { Planets } from "../../components/Planets";
import { Species } from "../../components/Species";
import { Starships } from "../../components/Starships";


export function Home() {
  return (
    <>
      <Header />
      <Cards />
      <Personages />
      <Species />
      <Planets />
      <Starships />
    </>
  );
}
