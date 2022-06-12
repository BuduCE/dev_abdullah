// import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';

function App() {
  
  // const [dark, setDark] = useState(false)
  return <div>
      <Toggle setDark={setDark}/>
      <Intro dark={dark}/>
      <About dark={dark}/>
      <ProductList dark={dark}/>
      <Contact dark={dark}/>
    </div>
};

export default App;
