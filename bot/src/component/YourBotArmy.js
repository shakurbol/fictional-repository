import React from 'react';


const YourBotArmy = ({ army, onReleaseBot ,onDeleteBot}) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-container">
        {army.map((bot) => (
          <div className="bot" key={bot.id}onClick={() => onReleaseBot(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <div className="bot-details">
              <span><h1>{bot.name}</h1></span>
              <span className="health">
              <i class="fa fa-heartbeat" aria-hidden="true"></i> Health: {bot.health}
              </span>
              <span className="damage">
              <i class="fa fa-bolt" aria-hidden="true"></i> Damage: {bot.damage}
              </span>
              <span className="armor">
              <i class="fa fa-shield" aria-hidden="true"></i> Armor: {bot.armor}
              </span>
              <span>Class: {bot.bot_class}</span>
              <span>Catchphrase: {bot.catchphrase}</span>
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

export default YourBotArmy;