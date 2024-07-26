import { GamingLibrary } from "../../components"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper"





const Browse = () => {
  return (
    <div>
        <SectionWrapper>
            <SectionHeader heading="Feautured" headEm="Games"/>
            <GamingLibrary/>


        </SectionWrapper>
      
    </div>
  )
}

export default Browse
