var React = require('react');
var Squad = require('Squad');
var ShowSquadButton = require('ShowSquadButton');
var getStats = require('getStats');

var Team = React.createClass({
  getInitialState: function () {
    return {
      squad: [],
      showSquad: false
    }
  },
  handleClick: function (value) {
    var that = this;
    if(this.state.showSquad === false){
      getStats.getSquad(value).then(function(squad){
        that.setState({
          squad: squad
        })
      })
      this.setState({
        showSquad: true
      })
    } else {
      this.setState({
        showSquad: false
      })
    }
  },
  render: function () {
    var that = this;

    return (

      <div>
        <div className="callout team">
          <div className="row">
            <div className="column small-1"><strong>Rank</strong></div>
            <div className="column small-3"><strong>Team</strong></div>
            <div className="column small-1"><strong>Points</strong></div>
            <div className="column small-4"><strong>Record</strong></div>
            <div className="column small-1"><strong>Goals</strong></div>
            <div className="column small-2"></div>
          </div>
          <div className="row align-middle">
            <div className="column small-1">{this.props.team.rank}</div>
            <div className="column small-3"><img src={this.props.team.crest} style={{height:'2.5rem'}}/> {this.props.team.teamName}</div>
            <div className="column small-1">{this.props.team.points}</div>
            <div className="column small-4">Wins: {this.props.team.wins} / Draws: {this.props.team.draws} / Losses: {this.props.team.losses}</div>
            <div className="column small-1">{this.props.team.goals}</div>
            <ShowSquadButton key={this.props.team.rank} onClick={that.handleClick.bind(that, this.props.team.teamLink)} visible={this.state.showSquad}/>
          </div>
        </div>
        <Squad players={this.state.squad} visible={this.state.showSquad}/>
      </div>
    )
  }


})

module.exports = Team;
