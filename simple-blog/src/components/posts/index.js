import React, { Component } from 'react';
import connect from 'react-redux';

import { fetchPosts } from '../../actions';

class PostsIndex extends Component {
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
