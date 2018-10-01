import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  // Needs to accept an argument that carries event handlers from the Field component in the form.
  // The props from the field object will be 'spread' (the ...field.input call) into the input.
  renderTextField(field) {
    return (
      <div className="form-group">
        <label for={ field.input.name }>{ field.label }</label>
        <input id={ field.input.name } className="form-control" type="text" { ...field.input } />
        <div className="field-errors">{ field.meta.error }</div>
      </div>
    );
  }

  render () {
    return (
      <div>
        <h1>New post</h1>
        <form>
          <Field name="title" label="Title" component={ this.renderTextField } />
          <Field name="categories"  label="Categories" component={ this.renderTextField } />
          <Field name="content"  label="Post content" component={ this.renderTextField } />
        </form>
      </div>
    );
  }
}

function validate(values) {
  // values object should have a key for each Field in the form => { title: '', categories: '', content: '' }

  // we need to declare an empty errors object, which will be return (possibly no longer empty) by this function
  const errors = {};

  if (!values.title) { errors.title = 'Enter a title' }
  if (!values.categories) { errors.categories = 'Enter some categories' }
  if (!values.content) { errors.content = 'Enter some content' }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm' // unique form identifier so that redux-form doesn't merge state from separate forms
})(PostsNew);
