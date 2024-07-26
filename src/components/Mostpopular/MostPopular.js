
import CardMostPopular from '../CardMostPopular/CardMostPopular';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import cardArr from '../../Data/Data';

import './MostPopular.css';
import Buttons from '../Buttons/Buttons';
const MostPopular = () => {
 
  let allCards = cardArr.map((ele) => 
    <CardMostPopular key={ele.key} img={ele.image} rate={ele.rate} download={ele.download} title={ele.title}/>

  )


  return (
    <>
       <SectionWrapper>
          <SectionHeader heading="Most Popular" headEm="Right Now"/>
            
            
          <div className="most-popular-items">
          
            {allCards}

          </div>

          <div style={{position:"absolute", left:"45%", marginTop:"23px"
          }}> 
            <Buttons insideBtn='Discover Popular'/>
          </div>
          

        </SectionWrapper>
      
    </>
  )
      





}

export default MostPopular
