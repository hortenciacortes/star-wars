import { Fragment } from "react";

export function CarouselItem({ arrayItem, firstItem, lastItem, isActive }) {
  return(
    <div className={`carousel-item ${isActive}`}>      
      <ul>
        {arrayItem.map((item, i) => (
          <Fragment key={item.name}>
            { 
              i > (firstItem ? firstItem : 0) && 
              i <= lastItem  && 
              <li key={item.name}>{item.name}</li>
            }
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export function CarouselItemAncora({ arrayItem, firstItem, lastItem, isActive }) {
  return(
    <div className={`carousel-item ${isActive}`}>      
      <ul>
        {arrayItem.map((item, i) => (
          <Fragment key={item.name}>
            { 
              i > (firstItem ? firstItem : 0) && 
              i <= lastItem  && 
              <a href={`/details#${item.name}`} key={item.name}>
                <li>{item.name}</li>
              </a>
            }
          </Fragment>
        ))}
      </ul>
    </div>
  )
}