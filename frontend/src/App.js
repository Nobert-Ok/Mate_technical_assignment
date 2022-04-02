import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import Userprofiles from './pages/Userprofiles';



function App() {
  return (
    <>
      <Router>
        <div className="container">
        <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route path="/userprofiles" element={<Userprofiles/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
