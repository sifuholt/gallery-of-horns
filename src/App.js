// first import react

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


// second class component

class App extends React.Component{
  render(){
    return (
      <>
        <Header />
        <Main />
        <Footer />

      </>
    )
  }
}


// third export component

export default App;
