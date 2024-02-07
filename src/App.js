import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './screens/HomePage';
import Players from './screens/Players';
import Teams from './screens/Teams';
import Games from './screens/Games';
import Stats from './screens/Stats';
import PlayerDetail from './screens/DetailPages/PlayerDetail';
import TeamDetail from './screens/DetailPages/TeamDetail';
import GameDetail from './screens/DetailPages/GameDetail';
import StatDetail from './screens/DetailPages/StatDetail';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  p-3" style={{ backgroundColor: 'orange' }}>
        <a class="navbar-brand" style={{ backgroundColor: 'blue', width: 60, display: 'flex', justifyContent: 'center', borderRadius: 10, color: 'white' }} href="/">NBA</a>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="players" element={<Players />} />
          <Route path="teams" element={<Teams />} />
          <Route path="games" element={<Games />} />
          <Route path="stats" element={<Stats />} />
          {/* Detail Pages */}
          <Route path="players/*" element={<PlayerDetail />} />
          <Route path="teams/*" element={<TeamDetail />} />
          <Route path="games/*" element={<GameDetail />} />
          <Route path="stats/*" element={<StatDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
