
import './App.css';
import Login from './pages/login'
import Main from './pages/Main';
import ExhibitListPage from './pages/ExhibitListPage';
import ExhibitInfoPage from './pages/ExhibitInfoPage';
import ReservationPage from './pages/ReservationPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import BoardList from './pages/BoardList';
// import BoardWrite from './pages/BoardWrite';
import Boardview from './pages/BoardView';
import BoardEdit from './pages/BoardEdit';
import AdminMain from './components/admin/AdminMain';
import PopupModal from './components/Login/PopupModal';
import WriteBoard from './pages/WriteBoard';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/popupModal" element={<PopupModal/>}/>
        <Route path="/exhibitList" element={<ExhibitListPage/>}/>
        <Route path="/exhibitInfo/:id" element={<ExhibitInfoPage/>}/>
        <Route path="/reservation/:id" element={<ReservationPage/>}/>
        <Route path="/boardList" element={<BoardList/>}/>
        <Route path="/boardView/:no" element={<Boardview/>}/>
        <Route path="/boardList/write" element={<WriteBoard/>}/>
        <Route path="/boardEdit" element={<BoardEdit/>}></Route>
        <Route path="/mypage/:memberId" element={<MyPage/>}/>
        <Route path="/admin" element={<AdminMain/>}/>
      </Routes>
      </Router>
  );
}

export default App;
