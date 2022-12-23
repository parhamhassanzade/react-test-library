import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Banner />
      <Routes>
        <Route exact path="/" element={<TodoPage/>} />
        <Route exact path="/followers" element={<FollowersPage/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
