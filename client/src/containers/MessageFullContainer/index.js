import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAPI } from '../../services/api';

import MessageFullView from '../../components/MessageFull';

class MessageFullContainer extends Component {
    state = { users: []};
    
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        const {api} = this.props;
        api.
            getUsers()
            .then(response => {
                this.setState({users: response.data});
            })
            .catch(error => console.log(error.response.data.message));
    }

    render() {
        const {users} = this.state;
        return (
          <MessageFullView users={users}/>
        );
      }
}

const mapStateToProps = state => {
    return { _id: state.user._id };
};

export default compose(connect(mapStateToProps), withAPI)(MessageFullContainer);