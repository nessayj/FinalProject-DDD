
import './App.css';
import Login from './pages/login'
import Main from './pages/Main';
import ExhibitListPage from './pages/ExhibitListPage';
import ExhibitInfoPage from './pages/ExhibitInfoPage';
import ReservationPage from './pages/ReservationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import BoardList from './pages/BoardList';
import BoardWrite from './pages/BoardWrite';
import Boardview from './pages/BoardView';
import BoardEdit from './pages/BoardEdit';

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
        <Route path='/board_view' element={<Boardview/>}/>
        <Route path="/board_list/write" element={<BoardWrite/>}/>
        <Route path='/board_edit' element={<BoardEdit/>}></Route>
        <Route path="/myPage" element={<MyPage/>}/>
      </Routes>
      </Router>
  );
}

export default App;
