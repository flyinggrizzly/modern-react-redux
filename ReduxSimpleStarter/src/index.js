require('dotenv').load();

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = process.env.API_KEY;

/*****
 * Create a new component class that produces some HTML.
 * This must be instantiated by wrapping it in JSX:
 *   <ClassName></ClassName>
 *   or, if it's not taking any args
 *   <ClassName />
 *
 * Returns JSX which will be transpiled into JavaScript
 * calls like
 *   React.createElement('div', null, 'Hi!');
 *
 * If you include attributes on the element...
 *   return <div class='foo' name='bar' data-whatever='cher'>Hi!</div>;
 *
 * the transpiled JS looks like
 *   React.createElement('div',
 *                       { 'class' : 'foo', 'name' : 'bar', 'data-whatever' : 'cher' },
 *                       'Hi!');
 */
const App = () => { return <div>Hi!</div>; }

/*****
 * Take this component's generated HTML and put it in the DOM.
 *
 * First arg is the thing to be rendered
 * Second arg is the DOM node into which to insert it
 */
ReactDOM.render(<App />, document.querySelector('.container'));
