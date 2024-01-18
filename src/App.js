import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ErrorPage from './pages/ErrorPage';
import Archive from './pages/Archive';
import CursorLight from './components/customComponents/CursorLight';

function App() {
  return (
    <>
      <CursorLight />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
