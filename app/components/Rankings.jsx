var React = require('react');
var getStats = require('getStats');

var Rankings = React.createClass({
  // getInitialState: function () {
  //   return {
  //       teams: null
  //   }
  // },
  showTeams: function (e) {
    e.preventDefault();

    this.props.getTeams();
    // getStats.getTeams().then(function (teamsData){
    //
    // })
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.showTeams}>
            <button className="button button-primary">Get Teams</button>
        </form>
      </div>
    )
  }
});

module.exports = Rankings;
