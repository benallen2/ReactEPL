var React = require('react');
var getStats = require('getStats');

var TeamsList = require('TeamsList');

var Main = React.createClass({
  getInitialState: function () {
    return {
      teams: [],
      squads: []
    }
  },
  componentDidMount: function () {
    var that = this;
    getStats.getTeams().then(function(teamData){
      that.setState({
        teams: teamData
      });
    })
  },
  componentDidUpdate: function () {

  },
  render: function () {
    var {teams} = this.state;

    return (
      <div className="main">
        <div className="topbar">
          <h2>English Premier League 2016/17</h2>
        </div>

        <TeamsList teams={teams} />
      </div>
    )
  }
});

module.exports = Main;
