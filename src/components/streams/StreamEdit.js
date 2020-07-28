import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions/index";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    // console.log(this.props);
    // console.log(props.match.params.id);
    // console.log(this.props.stream);
    const { stream } = this.props;
    //if we don't us if statement, it will throw error like cannot read property
    if (!stream) {
      return <div>Loading...</div>;
    }
    return <div>{stream.title}</div>;
  }
}

//ownProps will use the values form StreamEdit(props)
function mapStateToProps(state, ownProps) {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
