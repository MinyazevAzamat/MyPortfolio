import './App.css';
import Slider from './slider/Slider';
import { useState } from 'react';


function App() {

  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App">
        <Slider/>
    </div>
  );
}

export default App;
