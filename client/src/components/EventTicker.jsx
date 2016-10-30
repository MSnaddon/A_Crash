const React = require('react');

class EventTicker extends React.Component {
  render(){

    console.log(this.props)
    let events = this.props.feed.map((event, index)=>{
      return <div key={index} className="ticker-event">{event.description}</div>
    })

    return (
      <div className="game-view-child" id="event-ticker">
        <h3>I Am EventTicker</h3>
        {events}
      </div>
      )
  }
}

module.exports = EventTicker;