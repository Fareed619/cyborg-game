import './CardMostPopular.css';

import {FaStar,  FaDownload } from 'react-icons/fa';



const CardMostPopular = ({img, title, rate, download}) => {
  return (
    <>
       <div className="most-popular-item">
              <div className="most-populat-card">
                   <img className="img-popular" src={img}/>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                      <h6 style={{marginLeft:"8px", lineHeight:"1.5rem"}}>{title} <br/>
                        <span style={{color:"gray", marginTop:"8px"}}>sandbox</span>
                      </h6>
                      <ul>
                        <li><span style={{color:"yellow"}}><FaStar/> </span>{download}</li>
                        <li><span  style={{color:"var(--color-primary)"}}><FaDownload/> </span>{rate}</li>
                      </ul>
                      
                        
                    

                    </div>
                        
                    
                        
                        
                        
              </div>

        </div>
      
    </>
  )
}

export default CardMostPopular;
