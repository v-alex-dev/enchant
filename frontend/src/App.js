import './App.css';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Games from './components/games';
import Party from "./components/party";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import PlayerList from './components/playerlist';
import Enchantement from "./components/enchantement";



function App() {
  return (
     <BrowserRouter>
         <Routes>
             <Route path='/' element={<Party/>}/>
             <Route path='/games' element={<Games/>}/>
             <Route path='/player' element={<PlayerList/>}/>
             <Route path='/enchatement' element={<Enchantement/>}/>
         </Routes>
     </BrowserRouter>
  );
}

export default App;
