const React = require('react');

class EventTicker extends React.Component {
  render(){
    return (
      <div className="game-view-child" id="event-ticker">
        <h3>I Am EventTicker</h3>
      </div>
      )
  }
}

module.exports = EventTicker;