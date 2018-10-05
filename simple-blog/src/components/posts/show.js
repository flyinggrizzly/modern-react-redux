import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPost, deletePost } from '../../actions';

class PostsShow extends Component {
  id() {
    return this.props.match.params.id;
  }

  componentDidMount() {
    // extract ID from properties provided by react-router-dom
    this.props.getPost(this.id());
  }

  onDeleteClick() {
    this.props.deletePost(this.id(), () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) { return <div>Loading...</div> }

    return(
      <div>
        <Link to="/">Back to all posts</Link>
        <button className="btn btn-danger pull-xs-right"
                onClick={ this.onDeleteClick.bind(this) }>
          Delete post
        </button>

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

export default connect(mapStateToProps, { getPost, deletePost })(PostsShow);
