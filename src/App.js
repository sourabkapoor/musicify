import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Music from './Components/Music/Music';
import Contact from './Components/Contact/Contact';
//import Test from './test.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      isSignedIn: false
    };
  }

  render() {
    return (
    <div className="App bg-dark-gray">
      <NavBar/>
      <br/>
      <Music/> 
      {
        //<Test/>
      }
      <h1 className='grid pa6 ma4 white'>List of music</h1>
      <Contact />
    </div>
  );
  }
}

export default App;
