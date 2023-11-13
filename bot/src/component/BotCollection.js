import React from 'react';


const BotCollection = ({ bots, onEnlistBot, onDeleteBot }) => {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-container">
        {bots.map((bot) => (
          <div className="bot" key={bot.id} onClick={() => onEnlistBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <div className="bot-details">
            <span><h1>{bot.name}</h1></span>
              <span className="health">
                <i className="fa fa-heart"></i> Health: {bot.health}
              </span>
              <span className="damage">
                <i className="fa fa-crosshairs"></i> Damage: {bot.damage}
              </span>
              <span className="armor">
                <i className="fa fa-shield-half"></i> Armor: {bot.armor}
              </span>
              <span>Class: {bot.bot_class}</span>
              <span id='catchphrase'>Catchphrase: {bot.catchphrase}</span>
            
              <button className="delete-button" onClick={() => onDeleteBot(bot)}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;