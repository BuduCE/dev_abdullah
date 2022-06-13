// import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';

export const The

function App() {

  // const [dark, setDark] = useState(false)
  return <div id='light'>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
};

export default App;
