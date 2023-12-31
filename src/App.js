import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './components/Routes';



function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  return (
    <div className={darkTheme ? 'dark' : ''}>
     <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
      <Routes/>
      <Footer/>
    </div>

   </div>
  );
}
export default App;
