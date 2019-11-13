import React, { Component } from 'react'

export default class selectInput extends Component {
  renderError() {
    if (this.props.error) {
      return (
        <div id="name-err" className="err-text" aria-live="asseritive">
          {this.props.error}
        </div>
      );
    }
    //else
    return;
  }
  renderLabel() {
    let label = this.props.labelName;
    if (this.props.required) {
      label += "*";
    }
    return label;
  }
  renderOptions() {
    return this.props.options.map(option => {
      return (
        <option key={option.name} value={option.value}>{option.name}</option>
      )
    }
}
  render() {
    return (
      <div className='container'>
        <label htmlFor={this.props.id} className="form-group">{this.renderLabel()}</label>
        <select 
          id={this.props.id}
          type="text"
          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          value={this.props.value}
          className="form-control"
        >
          {this.renderOptions()}
        </select>
        {this.renderError()}
      </div>
    )
  }
}


  
