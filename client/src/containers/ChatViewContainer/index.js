import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAPI } from '../../services/api';

import ChatView from '../../components/ChatView';

class ChatViewContainer extends Component {
    
    constructor(props) {
        super(props);
        console.log("in ocnst");
        this.state = { messages: [],
                messageMatter:'',
                recvMessages:[],
                sentMessages:[],
                isSending: false,
                otherUserID:this.props.location.state.otherUserID
            };
    }

    async componentDidMount(){
        await this.getMessages();
        // setInterval(window.location.reload(), 100000000);
    }

    handleChange = e => {
          this.setState({ [e.target.name]: e.target.value });
          console.log(e.target.name, e.target.value);
          console.log(this.state.messageMatter);
    }

    getMessages = () => {
        const {api} = this.props;
        const {otherUserID} = this.state;
        api.
            getMessages(otherUserID)
            .then( response => {
                    // console.log("getting messages");
                    const recvMessages = response.data.recvMessages;
                    const sentMessages = response.data.sentMessages;
                    var pmessages=[];
                    recvMessages.forEach(message => {pmessages.push(message)});
                    sentMessages.forEach(message => {pmessages.push(message)});
                    console.log(pmessages);
                    pmessages.sort((m1,m2) => {return (m1.time-m2.time)});
                    console.log(pmessages);
                    this.setState({messages: pmessages});
                    this.setState({recvMessages: recvMessages});
                    this.setState({sentMessages: sentMessages});
            })
            .catch(error => console.log(error));
    }
    handleSend = e => {
        e.preventDefault();
        const {api} = this.props;
        const {otherUserID, messageMatter} = this.state;
        console.log(messageMatter, otherUserID);
        api.
            sendMessage({otherUserID, messageMatter})
            .then( () => {
                this.getMessages();
            })
            .catch(error => console.log(error.response.data.message));
    }
    render(){
        const {messages,  otherUserID, recvMessages, sentMessages} = this.state;
        return(
        <ChatView handleChange={this.handleChange} otherUserID={otherUserID} recvMessages={recvMessages} sentMessages={sentMessages} messages={messages} handleSend={this.handleSend}  />
        );
    }
}

const mapStateToProps = state => {
    return { _id: state.user._id };
};

export default compose(connect(mapStateToProps), withAPI)(ChatViewContainer);