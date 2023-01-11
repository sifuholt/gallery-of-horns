// first import react

import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import data from './data/data.json'



// second class component

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      heart: '',
    }
  }

  addHearts = () => {
    this.setState({
      heart: this.state.heart + ''
    
    });

  }
  render(){
    return (
      <>
        <Header />
        <Main data = {data} />
        <Footer />

      </>
    )
  }
}


// third export component

export default App;
