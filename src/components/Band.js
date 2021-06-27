import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.delete(this.props.b.id)
  }
  render() {
    return(
      <div>
        <li>{this.props.b.name}</li>
          
        
        <button onClick={this.handleClick}>
          Delete
        </button>
      </div>
    );
  }
};

export default Band;
