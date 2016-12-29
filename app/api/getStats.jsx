var axios = require('axios');

const TEAMS_DATA_URL = 'http://api.football-data.org/v1/competitions/426/leagueTable';

//426 is the current EPL season competition id
//data.res.standing.wins/draws/losses/playedGames/position/goals/goalDifference/goalsAgainst/points/AWAY/HOME
//data.res.standing._links.team.href = API call value for that team data.


module.exports = {
  getTeams: function () {
    var requestUrl = `${TEAMS_DATA_URL}`;

    return axios.get(requestUrl, {
      headers: { 'X-Auth-Token': 'abe47765c6ef4dd7bf4626026794fc90' }
    })
    .then((res) => {
      if(res.data.error){
        throw new Error (res.data.error)
      } else {
      let teamnames = [];
      let teamcrests = [];
      let teamData = [];
      let ranks = [];
      let league = [];
      let goals = [];
      let wins = [];
      let losses = [];
      let draws = [];
      console.log(res.data);
      league.push(res.data.leagueCaption);
      for(var i = 0; i < res.data.standing.length; i++){
        teamnames.push(res.data.standing[i].teamName);
        teamcrests.push(res.data.standing[i].crestURI);
        ranks.push(res.data.standing[i].position);
        wins.push(res.data.standing[i].wins);
        losses.push(res.data.standing[i].losses);
        draws.push(res.data.standing[i].draws);
        goals.push(res.data.standing[i].goals);
      }
      teamData = [teamnames, teamcrests, ranks, league, wins, losses, draws, goals];
      return teamData;
    }
    }, function (res) {
      throw new Error (res.data.error)
    });
  }
}
