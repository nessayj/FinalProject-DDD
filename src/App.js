
import './App.css';
import LoginBG from './pages/login/loginBG'
import Main from './pages/main/Main';
import ExhibitListPage from './pages/ExhibitListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<LoginBG/>}/>
        <Route path="/exhibitList" element={<ExhibitListPage/>}/>
      </Routes>
      </Router>
      
  );
}

export default App;
