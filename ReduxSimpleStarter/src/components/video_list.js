import React from 'react';

const VideoList = (props)  => {
  const videos = props.videos;
  console.table(videos);
  return (
    <ul className='col-md-4 list-group'>
    </ul>
  );
}

export default VideoList;
