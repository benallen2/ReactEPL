var React = require('react');
var Squad = require('Squad');
var getStats = require('getStats');


var TeamsList = React.createClass({
  getInitialState: function () {
    return {
      showSquad: false,
      squads: [],
      teamLinks: null
    }
  },
  componentWillReceiveProps: function (newProps) {
    var that = this;
    // console.log(newProps.teams[0].teamLink)
    var teamLinks = [];
    newProps.teams.map((team, index) => {
      teamLinks.push(team.teamLink + "/players");
    })
    this.setState({
      teamLinks: teamLinks
    })
    // getStats.getSquad().then(function(squad){
    //   that.setState({
    //     squads: squad
    //   });
    // })
  },
  renderButton: function () {
    if (this.state.showSquad === false){
      return <button className="button primary hollow column small-2" id={this.props.teams.rank} onClick={this.handleClick}>Show Squad</button>
    } else if (this.state.showSquad === true){
      return <button className="button primary hollow column small-2" id={this.props.teams.rank} onClick={this.handleClick}>Hide Squad</button>
    }
  },
  renderSquad: function () {
    if (this.state.showSquad === false){
      return <div></div>
    } else if (this.state.showSquad === true){
      return <Squad />
    }
  },
  handleClick: function () {
    var that = this;
    if (this.state.showSquad === false){
      console.log("hi");
      that.setState({
        showSquad: true
      })
    } else if (this.state.showSquad === true){
      console.log("bye");
      that.setState({
        showSquad: false
      })
    }
  },
  render: function () {
    return (
      <div>
        {this.props.teams.map((team, index) => {
          return (
            <div key={ `team-${ index }` }>
              <div className="callout secondary">
                <div className="row">
                  <div className="column small-1"><strong>Rank</strong></div>
                  <div className="column small-3"><strong>Team</strong></div>
                  <div className="column small-1"><strong>Points</strong></div>
                  <div className="column small-4"><strong>Record</strong></div>
                  <div className="column small-1"><strong>Goals</strong></div>
                  <div className="column small-2"></div>
                </div>
                <div className="row align-middle">
                  <div className="column small-1">{team.rank}</div>
                  <div className="column small-3"><img src={team.crest} style={{height:'2.5rem'}}/> {team.teamName}</div>
                  <div className="column small-1">{team.points}</div>
                  <div className="column small-4">Wins: {team.wins} / Draws: {team.draws} / Losses: {team.losses}</div>
                  <div className="column small-1">{team.goals}</div>
                  {this.renderButton()}
                </div>
              </div>
              {this.renderSquad()}
            </div>
            )
          })}
      </div>
    )
  }

});

module.exports = TeamsList;
