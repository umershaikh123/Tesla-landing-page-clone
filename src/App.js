
import './App.css';

// Components
import Header from './Components/Header'; 
import Home from './Components/Home';
import { Link , animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 


function App() {



  return (
    <div className="App">
          
      <Header />      
      <Home/>
      console.log()
    </div>
  );
}

export default App;
