var React = require('react');
var getStats = require('getStats');

var Squad = React.createClass({

  render: function (){
    if(this.props.visible === true){
      return (
        <div className="callout primary">
          <div className="row">
            <div className="column small-1"><strong>Jersey #</strong></div>
            <div className="column small-3"><strong>Name</strong></div>
            <div className="column small-2"><strong>Position</strong></div>
            <div className="column small-2"><strong>Nationality</strong></div>
            <div className="column small-2"><strong>Market Value</strong></div>
            <div className="column small-2"><strong>Birthday</strong></div>
          </div>
          {this.props.players.map((player, index) => {
            return(
              <div className="row" key={index}>
                <div className="column small-1">{player.jerseyNumber}</div>
                <div className="column small-3">{player.name}</div>
                <div className="column small-2">{player.position}</div>
                <div className="column small-2">{player.nationality}</div>
                <div className="column small-2">{player.marketValue}</div>
                <div className="column small-2">{player.dateOfBirth}</div>
              </div>
              )
          })}
        </div>
      )
  } else {
    return (
      <div></div>
    )
    }
  }
})

module.exports = Squad;
