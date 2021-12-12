import { Component } from 'react';
import './App.css';
import { Toolbar } from './components/toolbar/toolbar.component';
import { Body } from './components/body/body.component';
import React from 'react'

class App extends Component {
  constructor() {
    super();

    this.state = {
      isDark: false,
      wasLiked: false,
      wasUnliked: false,
      likes: 52726372
    }
  }

  handleClick = () => {
    this.setState({isDark: !this.state.isDark});
  }

  handleLikeClick = () => {
    this.setState({wasLiked: !this.state.wasLiked, likes: this.state.likes+1});
    if (this.state.wasLiked) {
      this.setState({likes: this.state.likes-1});
    }
  }

  

  render() {
    return (
      <div className="App">
        <Toolbar 
          mode={this.state.isDark} 
          handleClick={this.handleClick}
          likes={this.state.likes}
          wasLiked={this.state.wasLiked}
          handleLikeClick={this.handleLikeClick}

        />
        <Body 
          mode={this.state.isDark}
        />
       
      </div>
    );
  }
}

export default App;
