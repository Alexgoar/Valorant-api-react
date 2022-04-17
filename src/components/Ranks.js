import React from 'react';

import axios from 'axios';

export default class Ranks extends React.Component {
  state = {
    players: []
  };

  componentWillMount() {

      /*
      axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/603d9e1c-bcb2-50c8-a27b-5f33b5b7fbe3`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
    axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/43cce22e-13f9-5bc4-99e6-3c75ece60d14`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
      
      const puuids = [
      { puuid: "603d9e1c-bcb2-50c8-a27b-5f33b5b7fbe3" },
      { puuid: "43cce22e-13f9-5bc4-99e6-3c75ece60d14" },
      { puuid: "a001f7f0-dccc-507d-9959-49eeb1a2ed37" },
      { puuid: "d48b8a9e-fb93-5338-b21f-8eb62b05c7c1" },
      { puuid: "7cb645fd-ec35-5391-8752-4c130473ed51" },
      { puuid: "3909f5c5-7c11-50df-9bf8-9d6ed93e7ff2" },
      { puuid: "37c5e179-015d-5cef-b7cc-b979d1d6dbe1" },
      { puuid: "e6076e4e-9dc2-5772-bd44-3c84c75b9a56" }
      ];
      
      */
    axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/603d9e1c-bcb2-50c8-a27b-5f33b5b7fbe3`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
    axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/43cce22e-13f9-5bc4-99e6-3c75ece60d14`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
    axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/a001f7f0-dccc-507d-9959-49eeb1a2ed37`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
    axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/d48b8a9e-fb93-5338-b21f-8eb62b05c7c1`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
      axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/7cb645fd-ec35-5391-8752-4c130473ed51`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
    axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/3909f5c5-7c11-50df-9bf8-9d6ed93e7ff2`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
    axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/37c5e179-015d-5cef-b7cc-b979d1d6dbe1`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
    axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/eu/e6076e4e-9dc2-5772-bd44-3c84c75b9a56`)
      .then(res => {
        const players = res.data;
        this.setState(prevState => ({
          players: [...prevState.players, players.data]
          }))
      })
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
      {console.log(this.state.puuids)}
      {console.log(this.state.players)}
        {this.state.players.map(player => ( 
        <p>
          {player.name + "#" + player.tag +  " - " +  player.currenttierpatched + " | " + player.ranking_in_tier + "RR"}
        </p>
        ))}
      </>
    )
  }
}