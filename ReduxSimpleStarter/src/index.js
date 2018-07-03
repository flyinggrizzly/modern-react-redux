/*****
 * Create a new component that produces some HTML
 */
const App = function() {
  /**
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
  return <div>Hi!</div>;
}

/*****
 * Take this component's generated HTML and put it in the DOM
 */
React.render(app);
