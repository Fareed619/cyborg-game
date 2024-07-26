import GamingLibItem from "../GamingLibItem/GamingLibItem";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import game1 from '../../assets/images/game-01.jpg';
import game2 from '../../assets/images/game-02.jpg';
import game3 from '../../assets/images/game-03.jpg';
import Buttons from "../Buttons/Buttons";

const GamingLibrary = () => {
  return (
    <>
     <SectionWrapper>
        <SectionHeader heading="Your Gaming" headEm="Library"/>
        <GamingLibItem gameName="FortNight"     imgGame={game1}      dateAdded="24/08/2023"     hoursPlayed="634 H 22 M"   btnDownload="Downloaded"/>
        <GamingLibItem gameName="Pubg"          imgGame={game2}      dateAdded="04/02/2022"     hoursPlayed="740 H 50 M"   btnDownload="Download"/>
        <GamingLibItem gameName="FreeFire"      imgGame={game3}      dateAdded="23/12/2023"     hoursPlayed="309 H 04 M"   btnDownload="Downloaded"/>
       
        
        <div style={{position:"absolute", left:"45%", marginTop:"23px"
          }}> 
            <Buttons insideBtn="View Your Library"/>
          </div>

      </SectionWrapper>
      
    </>
  )
}

export default GamingLibrary
