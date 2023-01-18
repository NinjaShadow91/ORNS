import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserContainer from './UserContainer/Lazy';
import MessageFullContainer from '../MessageFullContainer';

class HomeContainer extends Component {
  render() {
    // const { user } = this.props;

    return (
      <>
        <UserContainer />
        {/* <MessageFullContainer/> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HomeContainer);
