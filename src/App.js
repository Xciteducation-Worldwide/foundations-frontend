// import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/Footer';
import { Donate } from './Donate';
import { Route, Routes } from 'react-router';
import { Main } from './Main';
import { Navbar } from './Components/Navbar';
import { Donateitdev } from './Donateitdev';
import { Apply } from './Apply';
import { Monetarydonation } from './Monetarydonation';
import { Volunteer } from './Volunteer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/monetarydonation" element={<Monetarydonation/>} />
        <Route path="/donate/volunteer" element={<Volunteer/>}/>
        <Route path="/donate/itdevices" element={<Donateitdev />} />
        <Route path="/apply" element={<Apply/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;