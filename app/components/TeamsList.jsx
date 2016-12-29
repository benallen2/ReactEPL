var React = require('react');



var TeamsList = ({team, crest, ranks}) => {
  return (
    <div>
      <h3 className="text-center">{ranks}. {teams}</h3>
      <img src={crest} />
    </div>
  )
}

module.exports = TeamsList;
