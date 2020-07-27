import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  // renderInput(formProps) {
  //   console.log(formProps); {input, label}
  //   return (
  //     <input
  //       onChange={formProps.input.onChange}
  //       value={formProps.input.value}
  //     />
  //   );
  // }
  //  or
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <form className="ui form">
        {/* name= form ma jj chahiyexa tei tei rakhane like username, title, etc */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({ form: "streamCreate" })(StreamCreate);
