import { Route, Routes } from 'react-router-dom';
import Login from './component/login';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
  </Routes>
);

export default App;
