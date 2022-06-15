import logo from './logo.svg';
import './App.css';
import { ColorProvider } from './context/color';
import ColorBox from './components/ColorBox'
import SelectColors from './components/SelectColors';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors></SelectColors>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
}

export default App;
