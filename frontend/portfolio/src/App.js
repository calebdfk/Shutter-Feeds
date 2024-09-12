import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import LandingPage from './Pages/Landingpage';

function App() {
  return (
    <div className="App">
      
      <Router>
        {/* <LandingPage /> */}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Other routes */}
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
