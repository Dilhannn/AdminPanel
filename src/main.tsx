import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router,Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import Login from './pages/login';
import Categories from './pages/categories';
import ProductDetails from './pages/productDetails';
import Navbar from './pages/navbar';

const LayoutWithNavbar: React.FC = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
      <Route path="/" index element={<Login />} />
    <Route element={<LayoutWithNavbar />}>
      <Route path= "/mainPage" element={<MainPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/productDetails" element={<ProductDetails />} />
    </Route>
      </Routes>
    </Router>
  </StrictMode>
);
