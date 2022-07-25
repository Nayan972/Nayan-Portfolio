
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Services from './routes/Services';
import Social from './components/Social';
import Navbar from './components/Navbar';




function App() {
  return (
    <>
    <Router>

     <div className="bg-zinc-900 w-full"> 
    
     

     <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/services" element={<Services/>} />
      <Route path='/contact' element={
  <>
    <Navbar />
    <Social />
  </>
} />
     
     </Routes>
   
     
      
      </div>
  
    </Router>
    </>
  );
}

export default App;
