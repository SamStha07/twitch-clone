import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";
import { deleteStream, fetchStream } from "../../actions/index";

class StreamDelete extends Component {
  // console.log(this.props.match.params.id);
  // console.log(this.props.streams);
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  deleteHandler = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <>
        <button
          className="ui negative button"
          onClick={() => this.deleteHandler()}
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  // console.log(state);
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
