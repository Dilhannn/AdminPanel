import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MainPage from './component/mainPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
