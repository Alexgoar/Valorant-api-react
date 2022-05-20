import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Player from './Player';
import Match from './Match';


export default class Matchs extends React.Component {
  state = {
    matchs: [],
    matchsId:[],
    cpt : 0
  }

  componentDidMount() {
    axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/eu/miikyy/euw`)
    .then(res => {
      const matchs = res.data.data;
      this.setState({matchs});
      console.log(matchs);
    })

    this.state.matchs.map((match, i) => (
      this.setState(prevState => ({
        matchsId: [...prevState.matchsId, match.metadata.matchid]
        }))
    ))
  }

  componentWillUnmount(){
  }

  switchTeamPlayer(player){
    console.log("player " + player)
    switch(player){
      case 'MiIkyy':
        return player.team
    }
  };

  increment(int){
    return int = int + 1
  }

  render() {
    /*var redTeam = []
    var blueTeam = []
    var joueurs = []
    var teams = []
    let counter = 0
    this.state.matchs.map((match, i) => (
        //tabPlayers[i] = match.players.all_players[i]
        match.players.red.map((player, j) => (
          //redTeam[i] = red.name + " " + red.tag
          console.log("i " + i + " j " + j + player.name + player.tag)
        ))
    ))
    
    var a = Object.values(this.state.matchs.players.red[1].name);
    console.log("a" + a)
    for (var i = 0; i < this.state.matchs.length; i++){
      for (var j = 0; j < this.state.matchs.length; j++){
        redTeam[i][j]=a.name + a.tag
      }
    }
    console.log("red team : " + redTeam)

    this.state.matchs.map((match, k) => (
      //tabPlayers[i] = match.players.all_players[i]
      match.players.blue.map((blue, l) => (
        blueTeam[k] = blue.name + " " + blue.tag
      ))
    ))
    //console.log('blue ' + blueTeam)
    //console.log('red ' + redTeam)
    tabPlayers.map((player, i) => (
      //teams[i] = this.switchTeamPlayer(player.name)
      console.log('stp ' + player)
      player.map((play, j)=>(
        console.log("stp " + play[0])
      ))*/
    //console.log(teams)
    var matchsId = []
    var players = []
    var matchsPtn = []
    
    this.state.matchs.map((match, i) => (
      matchsId.push(match.metadata.matchid)
    ))
    console.log(matchsId)

    this.state.matchs.map((match, i) => (
      console.log(match.players.red[i])
      
    ))

    return (
      <>
      <Player/>
      <div class="matchs">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                {
                  this.state.matchs.map((match, i) => (
                    <ListGroup.Item action href={"#" + match.metadata.matchid}>
                      {(() => {
                        switch (match.metadata.mode) {
                          case "Competitive": return match.metadata.map + " - " + match.teams.blue.rounds_won + " / " + match.teams.blue.rounds_lost;
                          case "Deathmatch": return match.metadata.map;
                          default: return "#FFFFFF";
                        }
                      })()}
                      {/*match.metadata.map + " - " + match.teams.blue.rounds_won + " / " + match.teams.blue.rounds_lost*/}
                    </ListGroup.Item>
                  ))
                }

              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                {
                  this.state.matchs.map((match, i) => (
                    <Tab.Pane eventKey={"#" + match.metadata.matchid}>
                      <div className="gamemode">{match.metadata.mode}</div>
                      <div className="blueTeam">
                      {
                        match.players.blue.map((teamBlue, j) =>(
                           <h2>{teamBlue.name + "#" + teamBlue.tag}</h2>
                        ))

                      }
                      </div>
                      <div className="redTeam">
                      {
                        match.players.red.map((teamRed, k) =>(
                           <h2>{teamRed.name + "#" + teamRed.tag}</h2>
                        ))

                      }
                      </div>
                    </Tab.Pane>
                  ))
                }
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      </>

    )
  }
}