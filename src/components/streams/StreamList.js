import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStreams } from "../../actions/index";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  render() {
    // console.log(this.props.streams);
    const { streams } = this.props;
    const streamlist = streams.map((stream) => (
      <div className="item" key={stream.id}>
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{streamlist}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  //Object.values()= it's gonna take objects as an arguement and pulled out all the objects and inserted into an array
  return { streams: Object.values(state.streams) };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
