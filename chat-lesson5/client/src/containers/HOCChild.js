import React, { Component } from 'react';
import hocLoader from './hocLoader';

class HOCChild extends Component {
  render() {
    const { currency } = this.props;

    return (
      <div>
        As of : {currency.date}
        <br />
        1 USD = {currency.rates['EUR']} EUR
        <br />
        1 USD = {currency.rates['RUB']} RUB
      </div>
    );
  }
}


export default hocLoader('currency')('http://m3d.space/wp-content/uploads/2016/12/LoadingCat.gif')(HOCChild);
