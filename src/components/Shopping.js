import React, { Component } from 'react';
import logo from '../assets/logo.svg';
// import '../assets/Shopping.css';
import md5 from 'md5';

class Shopping extends Component {
  constructor(){
    super();
    this.state = { cart: []};
    this.add = this.add.bind(this)
  }


  add(){
    const name = this.refs.name.value;
    const category = this.refs.category.value;
    const time = Date.now();
    const picked = false;
    const hash = md5(name + category + time);

    this.setState({cart: [...this.state.cart, {name, category, time, picked, hash}]});
  }


  complete(hash){
    const item = this.state.cart.find(i => i.hash === hash);
    item.done = !item.done;
    this.setState({ cart: this.state.cart });
  }


  render(){
    return (
      <div>
      <h1>Shopping Cart</h1>
      <input type="text" ref="name" />
      <select ref="category">
        <option>Meat</option>
        <option>Produce</option>
      </select>
      <button onClick={this.add}>Add</button>
      <div>{this.state.cart.map( i => {return (<div> i </div>)}</div>



      </div>
    );
  }
}

export default Shopping;
