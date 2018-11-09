import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStoreData } from '../../Actions/getStoreData';

import './App.css';



class App extends Component {

  componentDidMount(){
    this.props.getStore()
  }


  render() {
    return (
      <div>Hola Mundo</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    store: state.store
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getStore: () => dispatch(getStoreData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
