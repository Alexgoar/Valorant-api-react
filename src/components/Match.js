import React from 'react';
import axios from 'axios';

export default class Match extends React.Component {
  state = {
    matchId: "",
    matchDetails: []
  }

  componentDidMount() {
    axios.get(`https://api.henrikdev.xyz/valorant/v2/match/` + this.state.matchId)
    .then(res => {
      const match = res.data.data;
      this.setState({matchDetails: match});
      console.log("le match : " + match);
    })
  }

  render() {
    const id = this.props.id;
    this.setState({
        matchId: id
    });
    return (
      <>
        <h2>{this.state.matchId}</h2>
      </>
    )
  }
}