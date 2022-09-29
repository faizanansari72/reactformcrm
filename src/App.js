
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
    
  
    <Routes>
      <Route path = '/Form' element = {Forms}/>
      <Route path = '/Register' element = {Register}/>

      <Forms/>
      <Register/>
    </Routes>
  
     

    

    
 
    </div>
  );
}

export default App;
