import { Component } from 'react';
import './App.css';
import { Toolbar } from './components/toolbar/toolbar.component';
import { Body } from './components/body/body.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isDark: false,
      appColour: ''
    }
  }

  handleClick = () => {
    this.setState({isDark: !this.state.isDark});
  }

  render() {
    return (
      <div className="App">
        <Toolbar 
          mode={this.state.isDark} 
          handleClick={this.handleClick}
        />
        <Body 
          mode={this.state.isDark}
        />
        {/* <body style={{backgroundColor: this.state.appColour}}>
          <div className="App-body"></div>
        </body> */}
      </div>
    );
  }
}

export default App;
