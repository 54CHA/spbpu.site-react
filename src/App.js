import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Sites from './components/Sites';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Sites />
      <Footer/>
    </div>
  );
}

export default App;
