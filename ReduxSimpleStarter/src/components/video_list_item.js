import React from 'react';

/**
 * Using the ({properties_attribute_name}) syntax
 * is ES6 shorthand for passing in a props object
 * and assigning one of its attributes to a variable
 * with the same name within the function.
 *
 * In this case, ({video}) exposes a variable called
 * `video` in the scope of the function.
 *
 * It is equivalent to passing in (props) and then
 * assigning `const video = props.video`.
 */
const VideoListItem = ({video}) => {
  return <li>Video</li>;
}

export default VideoListItem;
