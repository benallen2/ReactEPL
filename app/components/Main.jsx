var React = require('react');
var getStats = require('getStats');

var TeamsList = require('TeamsList');
var Rankings = require('Rankings');


var Main = React.createClass({
  componentDidMount: function () {
    var that = this;

    getStats.getTeams().then(function(teamData){
      that.setState({
        teams: teamData[0],
        crest: teamData[1],
        value: teamData[2]
      });
    })
  },
  render: function () {
    var {teams, crest, value} = this.state;

    return (
      <div>
        {this.state.teams.map(function (team) {
          return (
            <div>
              <h3>{team}</h3>
            </div>
          )
        })}
      </div>
    )
  }
});

module.exports = Main;
