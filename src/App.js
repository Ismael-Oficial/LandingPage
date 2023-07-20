import './App.css';
import HomeCenter from './componentes/HomeCenter';
import Navbar from './componentes/Navbar';
import Sidebar from './componentes/Sidebar';
import SocialMedia from './componentes/SocialMedia';

function App() {

  return (
    <div>
      <Navbar />
      <SocialMedia />
      <HomeCenter />
      <Sidebar />
    </div>
  );
}

export default App;
