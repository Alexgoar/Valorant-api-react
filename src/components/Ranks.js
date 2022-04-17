import React from 'react';

import axios from 'axios';

export default class Ranks extends React.Component {
  state = {
    puuids: [],
    players: []
  };

  componentWillMount() {
    axios.get(`https://api.henrikdev.xyz/valorant/v1/account/xei%C3%A4/euw`)
      .then(res => {
        const puuids = res.data;
        this.setState(prevState => ({
            puuids: [...prevState.puuids, puuids.data.puuid]
          }))
      })
      axios.get(`https://api.henrikdev.xyz/valorant/v1/account/Marteocom/euw`)
      .then(res => {
        const puuids = res.data;
        this.setState(prevState => ({
            puuids: [...prevState.puuids, puuids.data.puuid]
          }))
      })
  }

  render() {
    return (
      <>
      {console.log(this.state.puuids)}
      {console.log(this.state.players)}
        {this.state.players.map(player => ( 
        <p>
          {player.name + "#" + player.tag +  " - " +  player.data.currenttierpatched}
        </p>
        ))}
      </>
    )
  }
}