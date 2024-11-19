import React, {Component, Fragment} from 'react'
import Button from './components/Button';
import Membre from './components/Membre';

const league = {
  membre1: {
    nom: "Batman",
    age: 48
  },
  membre2: {
    nom: "Superman",
    age: 46
  },
  membre3: {
    nom: 'Wonder Woman',
    age: 79
  },
  membre4: {
    nom: 'Catwoman',
    age: 34
  }
}


class App extends Component {
  state = { 
    league: league,
    plus: 2
   } 

  handleClick = (nb) => {
    const league = {...this.state.league}
    league.membre1.age +=nb
    //this.setState({league: league})
    this.setState({league})
  } 
  render() { 
    return (
      <>
        {/* commentaire */}
        <Membre 
          nom={this.state.league.membre1.nom}
          age={this.state.league.membre1.age}
        />
        <Membre 
          nom={this.state.league.membre2.nom}
          age={this.state.league.membre2.age}
        />
        <Membre 
          nom={this.state.league.membre3.nom}
          age={this.state.league.membre3.age}
        />
        <Membre 
          nom={this.state.league.membre4.nom}
          age={this.state.league.membre4.age}
        />
        <Membre
          nom="Napoleon"
          age="6"
        >
          Je suis le chef
        </Membre>
        <Button
          veillir = {() => this.handleClick(this.state.plus)} 
          plus={this.state.plus}
        />
      </>
    );
    // return React.createElement('div',{className: 'app'}, React.createElement('h1',null,'Hello world'))
  }
}
 
export default App;