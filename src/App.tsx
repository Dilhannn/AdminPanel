import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Categories from './pages/categories';
import ProductDetails from './pages/productDetails';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/productDetails" element={<ProductDetails/>}/>
  </Routes>
);

export default App;
