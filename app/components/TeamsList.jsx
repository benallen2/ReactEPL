var React = require('react');
var Squad = require('Squad');
var getStats = require('getStats');
var ShowSquadButton = require('ShowSquadButton');
var Team = require('Team');

var TeamsList = React.createClass({

  render: function () {
    var that = this;
    return (
      <div className="teamList">
        {this.props.teams.map((team, index) => {
          return (
            <Team key={ `${index}` } team={team}/>

            )
          })}

      </div>
    )
  }

});

module.exports = TeamsList;
