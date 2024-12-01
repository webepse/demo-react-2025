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

   componentDidMount()
   {
    console.log('montage')
   }

   componentDidUpdate()
   {
    console.log('Je recharge mon composant')
   }

   componentWillUnmount()
   {
    console.log('démontage')
   }

  handleClick = (nb) => {
    const league = {...this.state.league}
    league.membre1.age +=nb
    //this.setState({league: league})
    this.setState({league})
  } 
  render() { 

    const list = Object.keys(this.state.league).map(iteration => {
      return (
        <Membre key={iteration} age={this.state.league[iteration].age} nom={this.state.league[iteration].nom} />
      )
    })
    // [membre1,membre2,membre3,membre4]
    // tab.map((iteration) => { action })
    // tab de base [1,2,3,4,5]
    // action +1 à chaque itération
    // tab final [2,3,4,5,6]


    return (
      <>
        <h1>Hello World!</h1>
        {list}
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

