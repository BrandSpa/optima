'use strict';
import React from 'react';
import Quill from 'quill';
import uid from 'uid';

export default React.createClass({
  getInitialState() {
    return {
      id: `editor-${ uid() }`,
      idToolbar: `toolbar-${ uid() }`,
      editor: {},
      value: ''
    }
  },

  getDefaultProps() {
    return {
      style: {}
    }
  },

  componentDidMount() {
    let editor = this.mountQuill();
    this.setState({editor});
  },

  mountQuill() {
    let editor = new Quill(`#${this.state.id}`, {
      modules: {toolbar: `#${this.state.idToolbar}`},
       theme: 'snow'
    });
    this.getChanges(editor);
    return editor;
  },
  
  getChanges(editor) {
     editor.on('text-change', (delta, source) => {
      let html = editor.getHTML();
      this.handleChange(html);
    });
  },

  destroyEditor(editor) {
    editor.destroy();
  },

  componentWillUnmount() {
		this.destroyEditor(this.state.editor);
	},

  setContent(html) {
    let editor = this.state.editor;
    let range = editor.getSelection();
    editor.setHTML(html)
    editor.setSelection(range);
  },

  componentWillReceiveProps(props) {
    if(this.props.value !== props.value) {
      this.setContent(props.value);
    }
  },

  handleChange(html) {
    if(typeof this.props.onChange === 'function') {
      return this.props.onChange(html);
    }
  },

  getEditorContents() {
		return this.props.value || this.props.defaultValue || ''
	},
  
  shouldComponentUpdate() {
		// Never re-render or we lose the element.
		return false
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
          <div className="ql-format-separator"></div>
          <span className="ql-format-button ql-italic"></span>
          <div className="ql-format-separator"></div>
          <span className="ql-format-button ql-underline"></span>
          <div className="ql-format-separator"></div>
          <span className="ql-format-button ql-bullet"></span>
          <div className="ql-format-separator"></div>

          <select className="ql-align">
            <option value="left"></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
        </div>

        <div id={this.state.id} style={this.props.style}>
          <div dangerouslySetInnerHTML={{__html: this.getEditorContents()}} />
        </div>
      </div>
    )
  }
});
