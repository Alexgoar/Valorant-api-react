import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Accordion } from 'react-bootstrap';
import Player from './Player';
import Match from './Match';
import icebox from './img/icebox.jpeg';
import haven from './img/haven.jpg';
import bind from './img/bind.jpg';
import fracture from './img/fracture.jpg';

const queryParams = new URLSearchParams(window.location.search);
const pseudo = queryParams.get('pseudo');
const tag = queryParams.get('tag');

export default class Matchs extends React.Component {
  state = {
    matchs: [],
    matchsId: [],
    cpt: 0
  }

  componentDidMount() {
    axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/eu/`+ pseudo + "/" + tag)
      .then(res => {
        const matchs = res.data.data;
        this.setState({ matchs });
        console.log(matchs);
      })

    this.state.matchs.map((match, i) => (
      this.setState(prevState => ({
        matchsId: [...prevState.matchsId, match.metadata.matchid]
      }))
    ))
  }

  componentWillUnmount() {
  }

  switchTeamPlayer(player) {
    console.log("player " + player)
    switch (player) {
      case 'MiIkyy':
        return player.team
    }
  };

  increment(int) {
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
        <Player />
        <div class="matchs">
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {
              this.state.matchs.map((match, i) => (
                <Accordion.Item eventKey={match.metadata.matchid} className="accordeon">
                  <Accordion.Header>
                      {/*(() => {
                      switch (match.metadata.map) {
                        case "Haven": return <img src={haven}/>
                        case "Icebox": return <img src={icebox}/>
                        case "Bind": return <img src={bind}/>
                        case "Fracture": return <img src={fracture}/>
                        default: return "#FFFFFF";
                      }
                    })()*/}
                    {(() => {
                      switch (match.metadata.map) {
                        case "Haven": return <div className="mapimgHaven"></div>
                        case "Icebox": return <div className="mapimgIcebox"></div>
                        case "Bind": return <div className="mapimgBind"></div>
                        case "Fracture": return <div className="mapimgFracture"></div>
                        default: return "#FFFFFF";
                      }
                    })()}
                      <div className="statsMatch">
                    {(() => {
                      switch (match.metadata.mode) {
                        case "Competitive": return <p> {match.metadata.map + " - " + match.teams.blue.rounds_won + " / " + match.teams.blue.rounds_lost} </p>
                        case "Deathmatch": return <p> {match.metadata.map} </p>
                        default: return "#FFFFFF";
                      }
                    })()}
                    {/*match.metadata.map + " - " + match.teams.blue.rounds_won + " / " + match.teams.blue.rounds_lost*/}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="gamemode">{match.metadata.mode}</div>
                    <div className="players">
                      <div className="blueTeam">
                        <h4>Blue Team</h4>
                        <table>
                          <tr>
                            <th></th>
                            <th>Pseudo</th>
                            <th>ACS</th>
                            <th>Kills</th>
                            <th>Deaths</th>
                            <th>Assists</th>
                            <th>K/D</th>
                            <th>HS%</th>
                          </tr>
                          
                        {
                          match.players.blue.map((teamBlue, j) => (
                            <>
                            <tr>
                            <td><img class="agentimg" src={teamBlue.assets.agent.small}/></td>
                            <td>{teamBlue.name + "#" + teamBlue.tag}</td>
                            <td>{Math.round(teamBlue.stats.score / match.rounds.length)}</td>
                            <td>{teamBlue.stats.kills}</td>
                            <td>{teamBlue.stats.deaths}</td>
                            <td>{teamBlue.stats.assists}</td>
                            <td>{Math.round((teamBlue.stats.kills / teamBlue.stats.deaths) * 10) / 10}</td>
                            <td>{Math.round(teamBlue.stats.headshots / teamBlue.stats.bodyshots * 100) + "%"}</td>
                            </tr>
                            </>
                          ))

                        }
                        
                        </table>
                      </div>
                      <div className="redTeam">
                        <h4>Red Team</h4>
                        <table>
                          <tr>
                            <th></th>
                            <th>Pseudo</th>
                            <th>ACS</th>
                            <th>Kills</th>
                            <th>Deaths</th>
                            <th>Assists</th>
                            <th>K/D</th>
                            <th>HS%</th>
                          </tr>
                        {
                          match.players.red.map((teamRed, k) => (
                            <>
                            <tr>
                            <td><img class="agentimg" src={teamRed.assets.agent.small}/></td>
                            <td>{teamRed.name + "#" + teamRed.tag}</td>
                            <td>{Math.round(teamRed.stats.score / match.rounds.length)}</td>
                            <td>{teamRed.stats.kills}</td>
                            <td>{teamRed.stats.deaths}</td>
                            <td>{teamRed.stats.assists}</td>
                            <td>{Math.round((teamRed.stats.kills / teamRed.stats.deaths) * 10) / 10}</td>
                            <td>{Math.round(teamRed.stats.headshots / teamRed.stats.bodyshots * 100) + "%"}</td>
                            </tr>
                            </>
                          ))

                        }
                        </table>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>


              ))
            }
          </Accordion>
        </div>
      </>

    )
  }
}