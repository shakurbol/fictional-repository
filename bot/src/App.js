import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './component/BotCollection'
import YourBotArmy from './component/YourBotArmy'

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    // Fetch data from your JSON server or API
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error(error));
  }, []);

  const onEnlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };
  const onReleaseBot= (bot)=>{
    const updatedEnlistedBots = enlistedBots.filter((enlistedBot)=> enlistedBot.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots)
  };

  const onDeleteBot = (bot) => {
    // Make a DELETE request to your JSON server or API
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Filter out the deleted bot from both enlistedBots and bots
        setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <YourBotArmy army={enlistedBots} onReleaseBot={onReleaseBot} />
      <BotCollection bots={bots} onEnlistBot={onEnlistBot} onDeleteBot={onDeleteBot} />
      
    </div>
  );
}

export default App;