import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Categories from './pages/categories';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/categories" element={<Categories/>}/>
  </Routes>
);

export default App;
