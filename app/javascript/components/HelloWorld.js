import React from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"
import PropTypes from "prop-types"

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';

function getGreeting() {
  console.log('getGreeting() in action!')
  return {
    type: GET_GREETINGS_REQUEST
  };
};

class HelloWorld extends React.Component {
  render () {
    return (
      <>
        Greeting: {this.props.greeting}

        <button className="getGreetingsBtn" onClick={() => this.props.getGreeting()}>Get Greeting</button>
      </>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
})

const mapDispatchToProps = { getGreeting };


HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
