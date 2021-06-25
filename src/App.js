import React from 'react';
import Cards from '../src/components/Cards.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title"> Pokémon TCG </h1>
        <Cards />
      </header>
      <footer>
        <div>
          <marquee direction="left">
      <img src="https://emojis.slackmojis.com/emojis/images/1479080869/1364/espeon.gif?1479080869" alt="Espeon"/>
      <img src="https://emojis.slackmojis.com/emojis/images/1479081147/1367/flareon.gif?1479081147" alt="Flareon"/>
      <img src="https://emojis.slackmojis.com/emojis/images/1479080957/1365/glaceon.gif?1479080957" alt="Glaceon"/>
      <img src="https://emojis.slackmojis.com/emojis/images/1479080836/1363/eevee.gif?1479080836" alt="Eevee"/>
      <img src="https://emojis.slackmojis.com/emojis/images/1479080759/1360/jolteon.gif?1479080759" alt="Jolteon"/>
      <img src="https://emojis.slackmojis.com/emojis/images/1479081197/1368/vaporeon.gif?1479081197" alt="Vaporeon"/>
      <img src="https://emojis.slackmojis.com/emojis/images/1479081112/1366/umbreon.gif?1479081112" alt="Umbreon"/>
      <img id="rightimg" src="https://emojis.slackmojis.com/emojis/images/1479080808/1362/leafeon.gif?1479080808" alt="Leafeon"/>
          </marquee>
        </div>
      </footer>
    </div>
  );
}

export default App;