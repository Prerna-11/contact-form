import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import Welcome from './Welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
