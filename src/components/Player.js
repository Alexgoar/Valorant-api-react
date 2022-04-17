import React from 'react';

import axios from 'axios';

export default class Player extends React.Component {
  state = {
    pseudo: "",
    hashtag: ""
  };

  componentDidMount() {
    axios.get(`https://api.henrikdev.xyz/valorant/v1/account/xei%C3%A4/euw`)
      .then(res => {
        const player = res.data;
        this.setState({ pseudo: player.data.name, hashtag: player.data.tag });
      })
  }

  render() {
    return (
      <>
      <h1>{this.state.pseudo + "#" + this.state.hashtag}</h1>
      </>
    )
  }
}