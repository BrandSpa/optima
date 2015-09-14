'use strict';
var React = require('react');
var Quotation = require('views/quotation/quotation.jsx');

module.exports = {
  item: function(id) {
    React.render(<Quotation id={id} />, document.getElementById('main-content'));
  }
};
