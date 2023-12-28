import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header/>

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />

     </Routes>
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
