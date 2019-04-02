'use strict';
import React from 'react';
import Quill from 'quill';
import uid from 'uid';

const Editor = React.createClass({
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
    const editor = new Quill(`#${this.state.id}`, {
      theme: 'snow',
      modules: {
        toolbar: {
          container:
          [
              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
              ['blockquote', 'code-block'],
  
              [{ 'header': 1 }, { 'header': 2 }],               // custom button values
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
              [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
              [{ 'direction': 'rtl' }],                         // text direction
  
              [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
              [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
              [{ 'font': [] }],
              [{ 'align': [] }],
  
              ['clean']                                    // remove formatting button
             
          ]
        }
      }
    });

    this.getChanges(editor);
    return editor;
  },
  
  getChanges(editor) {
     editor.on('text-change', (delta, source) => {
      let html = editor.root.innerHTML;
      if(typeof this.props.onChange === 'function') {
        return this.props.onChange(html);
      }
    });
  },

  destroyEditor(editor) {
    editor.destroy();
  },

  componentWillUnmount() {
	  if(this.state.editor) {
      this.destroyEditor(this.state.editor);
    }	
	},

  setContent(html) {
    let editor = this.state.editor;
    let range = editor.getSelection();
    editor.pasteHTML(html)
    editor.setSelection(range);
  },

  componentWillReceiveProps(props) {
    if(props.value && this.props.value !== props.value) {
      this.setContent(props.value);
    }
  },

  handleChange(html) {
    console.log(html);
    if(typeof this.props.onChange === 'function') {
      return this.props.onChange(html);
    }
  },

  getEditorContents() {
		return this.props.value == null ? '' : this.props.value;
	},
  
  shouldComponentUpdate() {
		return false
	},

  render() {
    return (
      <div className="editor">
        <div id={this.state.id} style={this.props.style}>
          <div dangerouslySetInnerHTML={{__html: this.getEditorContents()}} />
        </div>
      </div>
    )
  }
});

export default Editor;