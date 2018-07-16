import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBl9wh-Nrgxseod8PfjVefKf-dEgDv4BXk'

YTSearch({ key: API_KEY, term: 'crazy cat' }, function(data) {
  console.table(data);
})

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
