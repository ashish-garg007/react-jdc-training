import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/Header';
import Content from './components/Content';
import logProps from './components/utilities/logProps';
import PrivateRoute from './pages/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Protected from './pages/Protected';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './redux/action';

class App extends Component {
  state = {
    title: 'Welcome to React JDC Traingin'
  };

  componentDidMount() {
    const { actions } = this.props;
    if (localStorage['REACT_JDC_TOKEN']) {
      actions.retrieveProfileFromToken(localStorage['REACT_JDC_TOKEN']);
    }
  }

  login = (username, password) => {
    //TODO: Your login logic here
    const { actions } = this.props;
    actions.retrieveProfileFromToken('some_sample_token');
  };

  // logout = () => {
  //   // TODO: your logout logic
  //   this.setState({
  //     auth: {
  //       isAuthenticated: false
  //     }
  //   });
  // };
  setTitle = title => {
    this.setState({ title });
  };

  onHeaderClick = event => {
    event.preventDefault();
    window.alert('You pressed the header');
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            {...this.state}
            {...this.props}
            onHeaderClick={this.onHeaderClick}
          />
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
            {this.props.profile.isAuthenticated &&
              <Link to="/protected">Protected</Link>}
          </nav>
          <Route
            exact
            path="/"
            render={props =>
              <Home login={this.login} {...this.props} {...props} />}
          />
          <Route
            path="/about"
            render={props =>
              <About setTitle={this.setTitle} {...props} {...this.props} />}
          />
          <PrivateRoute
            path="/protected"
            {...this.props}
            render={props => <Protected {...this.props} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

// export default logProps(App);

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

const mapStateToProps = (state, ownProps) => {
  const { profile } = state;
  return {
    profile
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(logProps(App));
