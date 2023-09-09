import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Cat from './components/cat';
import {Routes, Route} from 'react-router-dom'

function App(props) {
  return (
      <>
      <div className="row">
      <Navbar/>
      <Routes>
      <Route path='/cat' element={<Cat/>} />
      </Routes>
      
    </div>
    </> 
  );
}

export default App;


//added comment to test something