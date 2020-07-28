import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions/index";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderEditAndDelete(stream) {
    const { currentUserId } = this.props;
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  renderList() {
    const { streams } = this.props;
    return streams.map((stream) => (
      <div className="item" key={stream.id}>
        <div>{this.renderEditAndDelete(stream)}</div>
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  //Object.values()= it's gonna take objects as an arguement and pulled out all the objects and inserted into an array
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
