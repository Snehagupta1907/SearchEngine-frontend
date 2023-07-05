import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './components/Routes';


function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  console.log(darkTheme)
  return (
    <div className={darkTheme ? 'darks' : ''}>
     <div className="darks:bg-gray-900 bg-gray-100 darks:text-gray-200 black min-h-screen">
      <Navbar/>
      <Routes/>
      <Footer/>
    </div>

   </div>
  );
}
export default App;
