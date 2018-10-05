import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPost } from '../../actions';

class PostsShow extends Component {
  componentDidMount() {
    // extract ID from properties provided by react-router-dom
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;

    return(
      <div>
        <h2>{ post.title }</h2>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      </div>
    );
  }
}

// ownProps are the props that the component would have intrinsically (aside from the redux state props we will map)
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getPost })(PostsShow);
