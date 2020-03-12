import React from 'react';
import Header from './components/Header/Header';
import ThirdBox from './components/ThirdBox/ThirdBox';
import ForthBox from './components/ForthBox/ForthBox';
import ForthBox2 from './components/ForthBox/ForthBox';
import SixBox from './components/SixBox/SixBox';
import SevenBox from './components/SevenBox/SevenBox';
import SevenBox2 from './components/SevenBox/SevenBox2';
import EightBox from './components/EightBox/EightBox';
import NinethBox from './components/NinethBox/NinethBox';
import TenthBox from './components/TenthBox/TenthBox';
import ElevenBox from './components/ElevenBox/ElevenBox';
import TwelvBox from './components/TwelvBox/TwelvBox';
import ThirteenBox from './components/ThirteenBox/ThirteenBox';
import FifthBox from './components/FifthBox/FifthBox';

import Slider from './components/TopSlider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ThirdBox />
      <ForthBox />
      <ForthBox2 />
      <FifthBox />
      <SixBox />
      <SevenBox /> <br /> <br /> <br /> <br />
      <SevenBox2 /> <br /><br /><br />
      <Slider />
      <ThirdBox />
      <EightBox />
      <NinethBox />
      <TenthBox />
      <ElevenBox />
      <TwelvBox />
      <ThirteenBox />

    </div>
  );
}

export default App;
