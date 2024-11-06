import { Route, Routes, Outlet } from 'react-router-dom';
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

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route element={<LayoutWithNavbar />}>
      <Route index element={<MainPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/productDetails" element={<ProductDetails />} />
    </Route>
  </Routes>
);

export default App;
