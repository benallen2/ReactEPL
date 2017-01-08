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
      let teamData = [];

      for(var i = 0; i < res.data.standing.length; i++){
        teamData.push({
          teamName: res.data.standing[i].teamName,
          crest: res.data.standing[i].crestURI,
          rank: res.data.standing[i].position,
          wins: res.data.standing[i].wins,
          losses: res.data.standing[i].losses,
          draws: res.data.standing[i].draws,
          goals: res.data.standing[i].goals,
          teamLink: res.data.standing[i]._links.team.href,
          points: res.data.standing[i].points,
        });
      }
      return teamData;
    }
    }, function (res) {
      throw new Error (res.data.error)
    });
  },
  getSquad: function (team) {
    var teamURL = team + "/players";

    return axios.get(teamURL, {
      headers: { 'X-Auth-Token': 'abe47765c6ef4dd7bf4626026794fc90' }
    })
    .then((res) => {
      if(res.data.error){
        throw new Error (res.data.error)
      } else {
        console.log(res.data);
        return res.data.players
        // let squad = [];
        // for (var i = 0; i < res.data.players.length; i++){
        //   squad.push({
        //     playerName: res.data.players[i].name
        //   })
        // }
      }
    })
  }
}
