
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
// import { GamingLibrary, Hero, MostPopular} from './components/index';
import { Header, Container, Footer} from './sections/index';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Browse from './Pages/Browse/Browse';
import Detailes from './Pages/Detailes/Detailes';




const App = () => {


    return (
        <div className="All">

          <Router>
          <Header />
          <Container>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/profile' element={<Profile/>}/> 
                <Route path='/browse' element={<Browse/>}/>
                <Route path="/detailes" element={<Detailes/>}/>
              
            </Routes>
          
             
          </Container>
          <Footer/>




          </Router>
          
        

        
        </div>
    )
}

export default App;