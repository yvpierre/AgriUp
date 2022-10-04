import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from './pages/Notfound';
import Forms from './pages/Forms';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<Notfound />} />
        {/* path = * fonctionne si l'url ne correspond a rien de connu */}
        <Route path="*" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
