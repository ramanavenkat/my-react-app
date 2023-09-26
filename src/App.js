import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import RouteConfig from './Routes/RoutesConfig';

function App() {
  return (
    <>
      <Router>
        <RouteConfig />
      </Router>
    </>
  );
}

export default App;
