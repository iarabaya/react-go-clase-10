import './App.css';
import Boton from './components/Boton';
import Lista from './components/Lista';
import Video from './components/Video';
import Sonido from './components/Sonido';

function App() {
  return (
    <div className="App">
      <Lista items={["uno","dos","tres"]}/>
      <Boton text={"toca aqui"}/>
      <Video src=""/>
      <Sonido src="./assets/farm-cow.mp3"/>
    </div>
  );
}

export default App;
