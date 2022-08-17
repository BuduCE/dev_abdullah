// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
// import Toggle from './components/toggle/Toggle';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light") 

  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  const [dark, setDark] = useState(false)
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        {/* <Toggle /> */}
        <div className='switch'>
          {/* <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
          <ReactSwitch onChange={toggleTheme} checked = {theme === "dark"}/>
        </div>
        <Intro />
        <ProductList />
        <About />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
