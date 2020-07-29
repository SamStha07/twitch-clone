import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    // console.log(this.props.stream);
    const { stream } = this.props;
    //if we don't us if statement, it will throw error like cannot read property
    if (!stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          // initialValues={{
          //   title: stream.title,
          //   description: stream.description,
          // }} //special property from redux form will have {title, description} inside
          initialValues={_.pick(stream, "title", "description")} //will just the pick the values we need
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

//ownProps will use the values form StreamEdit(props)
function mapStateToProps(state, ownProps) {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
