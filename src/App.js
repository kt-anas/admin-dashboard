 import Login from './pages/Login';
 import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import './App.css';


function App() {
  return (
    <div className="App">

      <Router>
      
      <Routes>
      <Route path="/" element={<Login />} />
             <Route path="/dashboard" element={<Dashboard/>} />
             </Routes>
     </Router>

    </div>

  );
}

export default App;
