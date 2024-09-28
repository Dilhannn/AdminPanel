import { Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Categories from './component/categories';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/categories" element={<Categories/>}/>
  </Routes>
);

export default App;
