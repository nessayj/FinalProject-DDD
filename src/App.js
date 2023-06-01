
import './App.css';
import LoginBG from './pages/login/loginBG'
import Main from './pages/main/Main';
import ExhibitListPage from './pages/ExhibitListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Board/Card';
function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<LoginBG/>}/>
        <Route path="/exhibitList" element={<ExhibitListPage/>}/>
        <Route path="/Card" element={<Card/>}/>
      </Routes>
      </Router>
      
  );
}

export default App;
