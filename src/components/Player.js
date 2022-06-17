import React from 'react';

import axios from 'axios';

const queryParams = new URLSearchParams(window.location.search);
const pseudo = queryParams.get('pseudo');
const tag = queryParams.get('tag');

export default class Player extends React.Component {
  state = {
    pseudo: "",
    hashtag: "",
    card:"",
    account_level:""
  };

  componentDidMount() {
    axios.get(`https://api.henrikdev.xyz/valorant/v1/account/` + pseudo + "/" + tag)
      .then(res => {
        const player = res.data;
        this.setState({ pseudo: player.data.name, hashtag: player.data.tag, card: player.data.card.small, account_level: player.data.account_level });
      })
  }

  render() {
    return (
      <>
      <div class="player">
        <img src={this.state.card} alt="Logo" />
        <span>{this.state.pseudo + "#" + this.state.hashtag}</span>
        <h6>Level : {this.state.account_level}</h6>
      </div>
      </>
    )
  }
}