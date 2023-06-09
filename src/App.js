
import './App.css';
import Login from './pages/login'
import Main from './pages/main/Main';
import ExhibitListPage from './pages/ExhibitListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Board/Card';
import MyPage from './pages/MyPage';
function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/exhibitList" element={<ExhibitListPage/>}/>
        <Route path="/Card" element={<Card/>}/>
        <Route path="/myPage" element={<MyPage/>}/>
      </Routes>
      </Router>
      
  );
}

export default App;
