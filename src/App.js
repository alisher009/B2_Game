// import b2 from '../img/logo.svg'
import './App.css';
import Header from './Components/header/Header';
import Navbar from './Components/navbar/Navbar';
import SimulatorGame from './Components/sumulatorgame/SimulatorGame';
import VrGame from './Components/vrgame/VrGame';
import Footer from './Components/footer/Footer';


function App() {
  return (
    <>

      <Header />
      <main class="p-4">
        <Navbar />
        <SimulatorGame />
        <VrGame />
      <Footer />
      </main>



    </>

  );
}

export default App;
