import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { increment, decrement, fetchData } from '../../redux/actions/actions';

class App extends Component {

  componentDidMount() {
    this.props.onFetchData();
    console.log("data>>>", this.props.data);
    // console.log("title>>>", this.props.data.title);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.props.onIncrement} className="button is-primary">+1</button>
          <h1>{this.props.num}</h1>
          <button onClick={this.props.onDecrement} className="button is-danger">-1</button>
          <hr />

          {this.props.error && <p>{this.props.error}</p>}

          {
            this.props.data &&
            <ul>
              <li>id: {this.props.data.data.id}</li>
              <li>id: {this.props.data.data.title}</li>
            </ul>
          }

        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    num: state.num,
    data: state.data,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onFetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
