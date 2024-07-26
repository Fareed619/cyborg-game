import { GamingLibrary, Hero, MostPopular } from '../../components';
import './Home.css';


const Home = () => {
  return (
    <div>
        <Hero/>
        <MostPopular/>
        <GamingLibrary/>
    </div>
  )
}

export default Home
