'use strict';
import React from 'React';

export default React.createClass({
  getDefaultProps() {
    return {
      show: false
    }
  },

  render() {
    let style = this.props.show ? {color: '#3B2B7F',margin: '15px auto', display: 'block'} : {display: 'none'};

    return (
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" style={style}></i>
    )
  }
});
