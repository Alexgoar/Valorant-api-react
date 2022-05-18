import React from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Player from './Player';


export default class Matchs extends React.Component {
  state = {
    matchs: [],
    teams:[]
  }

  componentDidMount() {
    axios.get(`https://api.henrikdev.xyz/valorant/v3/matches/eu/xei%C3%A4/euw`)
      .then(res => {
        const matchs = res.data.data;
        this.setState({matchs});
        console.log(matchs);
      })
  }

  getTeam(){
    var team  = '';
    this.state.matchs.map((match,i) =>(
      match.players.all_players.map((player, j) =>(

        this.state.teams.push(player.name)
      ))
    ))
    console.log(this.state.team)
  }

  render() {
    return (
      <>
      <Player/>
      {this.getTeam()}
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
                      {match.metadata.mode}
                      {match.rounds.winning_team}
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