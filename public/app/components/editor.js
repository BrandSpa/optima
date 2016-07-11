'use strict';
import React from 'React';
import Quill from 'quill';
import uid from 'uid';

export default React.createClass({
  getInitialState() {
    return {
      id: `editor-${ uid() }`,
      idToolbar: `toolbar-${ uid() }`
    }
  },

  componentDidMount() {
    let editor = new Quill(`#${this.state.id}`, {
      modules: {toolbar: `#${this.state.idToolbar}`},
       theme: 'snow'
    });

    editor.on('text-change', (delta, source) => {
      this.handleChange(editor.getHTML());
    });
  },

  handleChange(html) {
    if(typeof this.props.onChange === 'function') {
      return this.props.onChange(html);
    }
  },

  render() {

    return (
      <div className="editor">
        <div id={this.state.idToolbar}>
          <select className="ql-size">
            <option value="10px">Small</option>
            <option value="13px" selected>Normal</option>
            <option value="18px">Large</option>
            <option value="32px">Huge</option>
          </select>

          <div className="ql-format-separator"></div>
          <span className="ql-format-button ql-bold"></span>
          <div className="ql-format-separator"></div>
          <span className="ql-format-button ql-italic"></span>
          <div className="ql-format-separator"></div>
          <span className="ql-format-button ql-bullet"></span>
          <div className="ql-format-separator"></div>
        </div>

        <div id={this.state.id}>
          <div dangerouslySetInnerHTML={{__html: this.props.value}} />
        </div>
      </div>
    )
  }
});
