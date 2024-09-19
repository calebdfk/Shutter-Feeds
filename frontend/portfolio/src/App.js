import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import LandingPage from './Pages/Landingpage';
import Header from './components/Header';
import Login from './Pages/Login';
import PostsPage from './Pages/Posts';
import ProfilePage from './Pages/ProfilePage';
import NotificationsPage from './Pages/NotificationsPage';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <Router>
        {/* Header is placed outside the Routes so it appears on all pages */}
        <Header />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts" element={<PostsPage/>} />
          <Route path="/notifications" element={<NotificationsPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          {/* Other routes */}
        </Routes>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
