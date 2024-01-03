import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PageNotFound from './pages/PageNotFound';
import IntialPage from './pages/IntialPage';
import AddNewBooks from './pages/AddNewBooks';
import Profile from './pages/Profile';
import Books from './pages/Books';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<IntialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<AddNewBooks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logs" element={<Books />} />
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
