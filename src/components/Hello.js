import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';

class Hello extends Component {
  constructor(){
    super();
    this.hi = this.hi.bind(this);
    this.state = { greeting: '' };
  }


  hi(){
    const name = this.refs.name.value;
    this.setState({ greeting : `Hello, ${name}` })
  }



  render(){
    return (
      <div>
        <div>
          <h1>Hello World</h1>
        </div>
        <div>
          <input type="text" ref="name" />
        </div>
        <div id="greeting">{this.state.greeting}</div>
        <div>
          <button onClick={this.hi} id="meow">Speak</button>
        </div>
        <div>
          <button onClick={this.hi} id="woof">Trap</button>
        </div>
      </div>
    );
  }
}

export default Hello;
