import React from 'react';
import Header from '../components/header';
import Expenses from '../components/expenses';
import Saved from '../components/saved';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Expenses />
        <Saved />
      </>);
  }
}

export default Wallet;
