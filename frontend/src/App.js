import './App.css';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Games from './components/games';
import PlayerList from './components/playerlist'
import Party from "./components/party";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";



function App() {
  return (
     <BrowserRouter>
         <Routes>
             <Route path='/' element={<PlayerList/>}/>
             <Route path='/party' element={<Party/>}/>
             <Route path='/games' element={<Games/>}/>
         </Routes>
     </BrowserRouter>
  );
}

export default App;
