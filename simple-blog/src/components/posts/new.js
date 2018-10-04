import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../../actions';

class PostsNew extends Component {
  // Needs to accept an argument that carries event handlers from the Field component in the form.
  // The props from the field object will be 'spread' (the ...field.input call) into the input.
  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const formClass = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={ formClass }>
        <label htmlFor={ field.input.name }>{ field.label }</label>
        <input id={ field.input.name } className="form-control" type="text" { ...field.input } />

        <div className="text-help">{ touched ? error : '' }</div>
      </div>
    );
  }

  postData(values) {
    this.props.createPost(values);
  }

  render () {
    const { handleSubmit  } = this.props;

    return (
      <div>
        <h1>New post</h1>
        <form onSubmit={ handleSubmit(this.postData.bind(this)) }>
          <Field name="title" label="Title" component={ this.renderTextField } />
          <Field name="categories"  label="Categories" component={ this.renderTextField } />
          <Field name="content"  label="Post content" component={ this.renderTextField } />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to='/posts' className='btn btn-danger'>Cancel</Link>
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
})(
  // connect() returns a valid React component, which make this valid input into the reduxForm() connect-like
  // helper. We're following the same pattern:
  // helper(callbacks)(component)
  // reduxForm() happens to take an options hash in the first set of args, and connect() takes two args:
  //   1. callback for handling Inbound state changes
  //   2. callback for handling Outbound state changes
  connect(null, { createPost })(PostsNew)
);
