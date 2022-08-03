import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Signup } from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { HomePage } from './components/HomePage';
// import { Cards } from "./components/Cards";
import { Shedule } from './components/Shedule';
import { Referal } from './components/Referal';
// import { MarkersMap } from './components/CurrentLocation';
function App() {
  return (
    <div className="App">         
      <UserAuthContextProvider>
      <Routes>          
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomePage/>} />   
          <Route path="/login" element={<Referal/>} />
          {/* <Route path="/bookmarks" element={<BookMarks/>} /> */}
          <Route path="/dashboard" element={<Shedule />} />
          {/* <Route path="/dashboard" element={<Cards/>}/> */}
          {/* <Route path="/lectures" element={<Lectures />} /> */}
          {/* <Route path="/currentlocation" element={<MarkersMap/>} /> */}
          
        </Routes>
        </UserAuthContextProvider>
    </div>
  );
}

export default App;