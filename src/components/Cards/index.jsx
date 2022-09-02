import { useEffect } from 'react';
import { swapi } from '../../server/api';
import './styles.css';
import iconPersonagens from '../../assets/personagens.svg';
import planetas from '../../assets/planetas.svg';
import nave from '../../assets/nave.svg';
import species from '../../assets/species.svg';

export function Cards({ personagens }) {
  const url = ['people/', 'species/', 'planets/', 'starships/']
  
  useEffect(() => {
    url.forEach(item => {
      swapi.get(`/${item}`)
        .then(response => {
          if(item === 'people/') return document.getElementById('people').innerHTML = response.data.count
          if(item === 'species/') return document.getElementById('species').innerHTML = response.data.count
          if(item === 'planets/') return document.getElementById('planets').innerHTML = response.data.count
          if(item === 'starships/') return document.getElementById('starships').innerHTML = response.data.count
        })
      .catch((err) => console.error(err));
    })
  }, [])

  return(
    <section className='grid-pattern'>
      <div className="cards container">

        <div className="card-small card-contain">
          <a href="#section-personages">
            <div className="card-info">
              <p>Personagens</p>
              <h4 id="people">{personagens}</h4>
            </div>
            <img src={iconPersonagens} alt="Ícone da mascara do darth vader" />
          </a>
        </div>

        <div className="card-double card-contain">
          <a href="#section-species">
            <div className="card-info">
              <p>Espécieis</p>
              <h4 id="species">0</h4>
            </div>
            <img src={species} alt="Ícone de espécieis" />
          </a>

          <span id="linha-vertical"></span>

          <a href="#section-planets">
            <div className="card-info">
              <p>Planetas</p>
              <h4 id="planets">0</h4>
            </div>
            <img src={planetas} alt="ícone de um planeta" />
          </a>
        </div>

        <div className="card-small card-contain">
          <a href="#section-starships">
            <div className="card-info">
              <p>Aeronaves</p>
              <h4 id="starships">0</h4>
            </div>
            <img src={nave} alt="Ícone de uma nave espacial" />
          </a>
        </div>
      </div>
    </section>
  )
}