import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStoreData, filtered } from '../../Actions/getStoreData';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import NoContent from '../NoContent/NoContent';

const initialType = "All";

class App extends Component {
  componentDidMount(){
    this.props.getStore()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.store.storeData !== this.props.store.storeData){
      this.props.filter(initialType)
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <Redirect to="/products" />
          <Route path="/products" component={Products}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/clients" component={NoContent}></Route>  
          <Route path="/" component={NoContent}></Route> 
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
    getStore: () => dispatch(getStoreData()),
    filter: (type) => dispatch(filtered(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
