import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarWarsCharts from './pages/StarWarsCharts';
import './index.css';

import Nav from './components/Nav';
import Loader from './components/Loader';
import CharacterSearch from './pages/CharacterSearch';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Loader text="Welcome" />} />

          <Route path="/planets" element={<StarWarsCharts />} />
          <Route path="/character-search" element={<CharacterSearch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
