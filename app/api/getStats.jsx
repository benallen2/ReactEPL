var axios = require('axios');

const TEAMS_DATA_URL = 'http://api.football-data.org/v1/competitions/398/teams';

//377df2fc3888b004

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
      let teamvalue = [];
      let teamData = [];
      for(var i = 0; i < res.data.teams.length; i++){
        teamnames.push(res.data.teams[i].name);
        teamcrests.push(res.data.teams[i].crestUrl);
        teamvalue.push(res.data.teams[i].squadMarketValue)
      }
      teamData = [teamnames, teamcrests, teamvalue];
      return teamData;
    }
    }, function (res) {
      throw new Error (res.data.error)
    });
  }
}
