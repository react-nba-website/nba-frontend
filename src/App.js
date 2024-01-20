import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './screens/HomePage';
import Players from './screens/Players';
import Teams from './screens/Teams';
import Games from './screens/Games';
import Stats from './screens/Stats';
import PlayerDetail from './screens/DetailPages/PlayerDetail';
import TeamDetail from './screens/DetailPages/TeamDetail';
import GameDetail from './screens/DetailPages/GameDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path="players" element={<Players />} />
        <Route path="teams" element={<Teams />} />
        <Route path="games" element={<Games />} />
        <Route path="stats" element={<Stats />} />
        {/* Detail Pages */}
        <Route path="players/*" element={<PlayerDetail />} />
        <Route path="teams/*" element={<TeamDetail />} />
        <Route path="games/*" element={<GameDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
