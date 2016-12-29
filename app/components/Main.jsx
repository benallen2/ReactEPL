var React = require('react');
var getStats = require('getStats');

var TeamsList = require('TeamsList');
var Rankings = require('Rankings');


var Main = React.createClass({
  getInitialState: function () {
    return {
      teams: [],
    }
  },
  componentDidMount: function () {
    var that = this;
//teamdata: name, crest, rank, league, wins, losses, draws, goals
    getStats.getTeams().then(function(teamData){
      that.setState({
        teams: teamData[0],
        crests: teamData[1],
        ranks: teamData[2],
        league: teamData[3],
        wins: teamData[4],
        losses: teamData[5],
        draws: teamData[6],
        goals: teamData[7]
      });

    })
  },
  render: function () {
    var { teams, crests, ranks, league, wins, losses, draws, goals } = this.state;

    var renders = [];
    for (var i = 0; i < teams.length; i++){
      renders.push(<p key={i}>{ranks[i]}. {teams[i]} <img src={crests[i]} style={{height: '60px'}} />Record: W<strong>{wins[i]}</strong> / D<strong>{draws[i]}</strong> / L<strong>{losses[i]}</strong> Goals: <strong>{goals[i]}</strong></p>)
    }

    return (
      <div>
        <h2 style={{textAlign: 'center'}}>{league}</h2>
        {renders}
      </div>
    )
  }
});

module.exports = Main;
