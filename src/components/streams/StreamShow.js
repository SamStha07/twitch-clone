import React, { Component } from "react";
import { connect } from "react-redux";
import flv from "flv.js";

import { fetchStream } from "../../actions/index";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(this.videoRef);
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  buildPlayer() {
    if (TouchList.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    // console.log(this.props.stream);
    const stream = this.props.stream;
    if (!this.props.stream) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
        <h4>Title: {stream.title}</h4>
        <p>Description: {stream.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);
