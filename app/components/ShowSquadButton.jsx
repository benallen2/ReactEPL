var React = require('react');

var ShowSquadButton = React.createClass({
  // getInitialState: function () {
  //   return {
  //     showSquad: false
  //   }
  // },
  // renderButton: function () {
  //   if (this.state.showSquad === false){
  //     return <button className="button primary hollow column small-2" onClick={this.props.handleClick}>Show Squad</button>
  //   } else if (this.state.showSquad === true){
  //     return <button className="button primary column small-2" onClick={this.props.handleClick}>Hide Squad</button>
  //   }
  // },
  // handleClick: function () {
  //   var that = this;
  //   if (this.state.showSquad === false){
  //     console.log("hi");
  //     that.setState({
  //       showSquad: true
  //     })
  //   } else if (this.state.showSquad === true){
  //     console.log("bye");
  //     that.setState({
  //       showSquad: false
  //     })
  //   }
  // },

  render: function () {
    if (this.props.visible === false){
        return <button className="button primary hollow column small-2"  onClick={this.props.onClick}>Show Squad</button>
      } else if (this.props.visible === true){
        return <button className="button primary column small-2"  onClick={this.props.onClick}>Hide Squad</button>
      }
    }  
})

module.exports = ShowSquadButton;
