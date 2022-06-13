// import logo from './logo.svg';
import { createContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';

export const ThemeContext = createContext(null);

function App() {

  // const [dark, setDark] = useState(false)
  return (
    <ThemeContext>
      <div id='light'>
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </div>
    </
  );
};

export default App;
