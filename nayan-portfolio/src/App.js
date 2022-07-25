
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WebDev from './routes/WebDev'
import Services from './routes/Services';



function App() {
  return (
    <>
    <Router>

     <div className="bg-zinc-900 w-full"> 
    
     

     <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/webDev" element={<WebDev/>} />
      <Route path="/services" element={<Services/>} />

     
     </Routes>
   
     
      
      </div>
  
    </Router>
    </>
  );
}

export default App;
