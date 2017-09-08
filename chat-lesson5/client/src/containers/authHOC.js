import React, { Component } from 'react';
import ws from 'utils/ws';

export default (ChildComponent) => {
  return class AuthHoc extends Component {
    auth() {
      if ( localStorage.getItem('auth') ) return true;

      let name = prompt('Enter your name:');
      const isAuth = !name || !name.trim().length ? false : true;

      if ( isAuth ) {
        localStorage.setItem('auth', name);
        ws.emit(name);
      }

      return isAuth;
    }

    noName() {
      return (
        <div class="noname-wrap">
          You didn't enter name<br />
          <button onClick={() => location.reload()}>try again?</button>
        </div>
      )
    }

    render() {
      return this.auth() ? <ChildComponent {...this.props} /> : this.noName();
    }
  }
}
