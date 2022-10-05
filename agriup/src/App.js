import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from './pages/Notfound';
import Forms from './pages/Forms';
import Team from "./pages/Team";
import Pricing from './pages/Pricing';
import Account from './pages/Account';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/team" element={<Team />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/account" element={<Account />} />
        {/* path = * fonctionne si l'url ne correspond a rien de connu */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;