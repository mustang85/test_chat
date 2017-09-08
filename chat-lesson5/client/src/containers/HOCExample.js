import React, { Component } from 'react';
import HOCChild from './HOCChild';


export default class HOCExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: {}
    }
  }

  componentWillMount() {
    // эмуляция долгого ответа от сервера
    setTimeout(() => {
      fetch('http://api.fixer.io/latest?base=USD')
        .then(r => r.json())
        .then(data => {
          this.setState({currency: data})
        })
    }, 2000)
  }

  render() {
    return (
      <div style={{background: '#FFF', color: '#000', padding: 100}}>
        <HOCChild currency={this.state.currency} />
      </div>
    );
  }
}
