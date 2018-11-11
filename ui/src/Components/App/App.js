import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStoreData } from '../../Actions/getStoreData';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import  Nav from '../Nav/Nav';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';

import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.getStore()
  }


  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <Redirect to="/products" />
          <Route path="/products" component={Products}></Route>
          <Route path="/contact" component={Contact}></Route>        
        </div>
      </Router>
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
