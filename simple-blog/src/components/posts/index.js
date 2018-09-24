import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions';

class PostsIndex extends Component {
  // Lifecycle function--runs once the component has appeared on the DOM
  // Fetching data could be before or after mounting, because it's async,
  // and rendering won't get blocked.
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>
        Posts index
      </div>
    );
  }
}

// Call the fetchPosts action creator directly in the connect() call,
// instead of using an explicit mapDispatchToProps() function. That is
// still useful if we need to do some transformations first though.
export default connect(null, { fetchPosts })(PostsIndex);
