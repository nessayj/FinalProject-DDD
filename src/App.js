
import './App.css';
import Login from './pages/login'
import Main from './pages/Main';
import ExhibitListPage from './pages/ExhibitListPage';
import ExhibitInfoPage from './pages/ExhibitInfoPage';
import ReservationPage from './pages/ReservationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import BoardList from './pages/board/BoardList';
import BoardWrite from './pages/board/BoardWrite';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/exhibitList" element={<ExhibitListPage/>}/>
        <Route path="/exhibitInfo/:id" element={<ExhibitInfoPage/>}/>
        <Route path="/reservation/:id" element={<ReservationPage/>}/>
        <Route path="/board_list" element={<BoardList/>}/>
        <Route path="/board_list/write" element={<BoardWrite/>}/>
        <Route path="/myPage" element={<MyPage/>}/>
      </Routes>
      </Router>
      
  );
}

export default App;
