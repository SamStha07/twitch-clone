import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput(formProps) {
    // console.log(formProps);
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />
      <input {...formProps.input} />
    );
  }

  render() {
    console.log(this.props);
    return (
      <form>
        {/* name= form ma jj chahiyexa tei tei rakhane like username, title, etc */}
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreate);
