import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  // Needs to accept an argument that carries event handlers from the Field component in the form.
  // The props from the field object will be 'spread' (the ...field.input call) into the input.
  renderTitleField(field) {
    return (
      <div>
        <input type="text" { ...field.input } />
      </div>
    );
  }

  render () {
    return (
      <div>
        <h1>New post</h1>
        <form>
          <Field name="title" component={ this.renderTitleField } />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm' // unique form identifier so that redux-form doesn't merge state from separate forms
})(PostsNew);
