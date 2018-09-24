import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from '../../actions';

class PostsIndex extends Component {
  // Lifecycle function--runs once the component has appeared on the DOM
  // Fetching data could be before or after mounting, because it's async,
  // and rendering won't get blocked.
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={ post.id }>
          { post.title }
        </li>
      )
    })
  }

  render() {
    return(
      <div>
        <h3>Posts:</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// Call the fetchPosts action creator directly in the connect() call,
// instead of using an explicit mapDispatchToProps() function. That is
// still useful if we need to do some transformations first though.
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
