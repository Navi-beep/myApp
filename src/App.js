//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Cat from './components/cat';
import Postcard from './components/bean';
import {Routes, Route} from 'react-router-dom'
//import 



function App(props) {
  return (
      <>
      <div className="row">
      <Navbar/>
      <Routes>
      <Route path='/cat' element={<Cat/>} />
      </Routes>
      <Postcard/> 
      
    </div>
    </> 
  );
}

export default App;


//added comment to test something
//gonna add another component soon 