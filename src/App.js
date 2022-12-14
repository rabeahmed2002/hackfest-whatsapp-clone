import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Chatpage from "./Components/ChatPage"
import Home from "./Components/Home"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';


function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/chatpage' element ={<Chatpage/>}/>
            <Route path='/' element ={<Home/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
