import loading from '../../assets/loading.gif';
import { CarouselItem, CarouselItemAncora } from "../CarouselItem";

export function Carousel({ arrayItems, id, title }) {
  const count = (arrayItems.length / 21).toFixed();
  const arrayCount = [];
  for(let i = 0; i < count; i++) {
    arrayCount.push(arrayCount.length === 0 ? 21 : arrayCount[i-1]+21);
  }

  return(
    <section className="grid-pattern">
  
      <div id={id} className="carousel slide container" data-bs-ride="false">
        
        <h2>{title} do universo de Star Wars ({arrayItems.length}):</h2>

        <div className="carousel-indicators">
          {arrayCount.map((item, i) => (
            <button 
              key={`bt${i}`}
              type="button" 
              data-bs-target={`#${id}`} 
              data-bs-slide-to={i} className={i === 0 ? 'active' : null} 
              aria-current={i === 0 ? 'true' : null} aria-label={`Slide ${i}`}>
            </button>
          ))}
        </div>

        <div className="carousel-inner">
          
          {arrayCount.map((item, i) => (
            id != 'id-starships' ?
              <CarouselItem 
                key={`ci${i}`}
                arrayItem={arrayItems} 
                firstItem={arrayCount[i-1]} 
                lastItem={item} 
                isActive={i === 0 ? 'active' : ''} 
              /> :
              <CarouselItemAncora 
                key={`cia${i}`}
                arrayItem={arrayItems} 
                firstItem={arrayCount[i-1]} 
                lastItem={item} 
                isActive={i === 0 ? 'active' : ''} 
              />
          ))}

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {arrayItems.length <= 20 && 
        <div className="loading">
          <img src={loading} alt="Carregando" />
        </div>
      }
    </section>
  )
}