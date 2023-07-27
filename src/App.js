import './App.css';
import About from './componentes/About';
import HomeCenter from './componentes/HomeCenter';
import Navbar from './componentes/Navbar';
import Sidebar from './componentes/Sidebar';
import SocialMedia from './componentes/SocialMedia';

function App() {

  return (
    <div>
      <div className='Home'>
        <Navbar />
        <SocialMedia />
        <HomeCenter />
        <Sidebar />
      </div>
      <About />
    </div>
  );
}

export default App;
