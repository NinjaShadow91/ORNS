import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as LINKS from '../../constants/links';

import Header from '../../components/Header';

class HeaderContainer extends Component {
  render() {
    const { user } = this.props;

    return (
      <>
        {user && (<Header links={LINKS.USER_LINKS} isAuthenticated={true} />)}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HeaderContainer);
