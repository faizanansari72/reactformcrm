
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Forms from './components/Forms';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
    
  <BrowserRouter>
    <Routes>
      <Route path = '/Form' element = {<Forms />}/>
      <Route path = '/Register' element = {<Register />}/>

      {/* <Forms/>
      <Register/> */}
    </Routes>
    </BrowserRouter>
     

    

    
 
    </div>
  );
}

export default App;
