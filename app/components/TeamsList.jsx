var React = require('react');



var TeamsList = ({teams, crest, value}) => {
  return (
    <div>
      <img src={crest} />
      <h3 className="text-center">{teams}</h3>
      <h3 className="text-center">Squad Value: {value}</h3>
    </div>
  )
}

module.exports = TeamsList;
