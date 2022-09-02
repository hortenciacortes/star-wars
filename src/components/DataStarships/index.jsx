import { Fragment, useEffect, useRef, useState } from 'react';
import { swapi } from '../../server/api';
import { TableColumn, TableHead } from '../Table';
import loading from '../../assets/loading.gif';
import './styles.css'

export function DataStarships() {
  const starship = window.location.hash.replaceAll('%20', ' ').replace('#', '');
  
  const [starshipsData, setStarshipsData] = useState([]);
  const firstRenderRef = useRef(true);

  const arrayKey = [
    'name', 'model', 'manufacturer', 'cost_in_credits', 'max_atmosphering_speed', 'crew', 
    'passengers', 'cargo_capacity', 'consumables', 'hyperdrive_rating', 
    'starship_class', 'created', 'edited'
  ]

  const arrayTh = [
    'Nome', 'Modelo', 'Fabricante', 'Custo', 'Velocidade máxima', 'Equipe técnica', 
    'Passageiros', 'Capacidade de carga', 'Consumíveis', 'Classificação do hiperdrive', 
    'Classe da nave', 'Criação', 'Editado'
  ]

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if(starshipsData.length === 0) {
      swapi.get(`/starships/?search=${starship}`)
      .then(response => setStarshipsData(...response.data.results))
      .catch((err) => console.error(err));
    }
}, [])
  
  return (
    <section className='grid-pattern'>
      <div className='container'>

        <h2>Nave espacial do universo de Star Wars: <span>{starship}</span></h2>

        <table className='table table-dark table-striped'>
          <tbody>
            {Object.entries(starshipsData).map(([key, value]) => (

              <Fragment key={key}>
                {arrayKey.map((item, i) => (

                  <Fragment key={'f'+i}>
                  {item === key && 

                    <tr key={'tr'+i}>
                      <TableHead starshipsData={arrayTh[i]} key={'th'+i}/>
                      <TableColumn starshipsData={value} chave={key} key={'td'+i}/>
                    </ tr>}

                  </ Fragment>

                ))}
              </Fragment>

            ))}
          </tbody>
        </table>
        
        {starshipsData.length <= 0 && 
          <div className='loading'>
            <img src={loading} alt='Carregando' />
          </div>
        }
      </div>
    </section>
  );
}
