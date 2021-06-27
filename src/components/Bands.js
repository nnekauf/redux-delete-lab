import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

    renderBand = () => {
        return this.props.bands.map(b => <Band delete ={this.props.delete} key = {b.id} b = {b}/>)
    }
  render() {
    return(
      <div>
        {this.renderBand()}
      </div>
    );
  }
};

export default Bands;
