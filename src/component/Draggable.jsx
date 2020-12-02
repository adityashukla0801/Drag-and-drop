import React, { Component } from 'react'



export class Draggable extends Component {

  drag = (e) =>{
    e.dataTransfer.setData('transfer', e.target.id);
    console.log(e.target);  
  }

  noAllowDrop = (e) =>{
    e.stopPropagation();
  }

  render() {
    return (
      <div id={this.props.id} draggable='true' onDragStart = {this.drag} onDragOver={this.noAllowDrop} style={this.props.style}>
        {this.props.children}
     
      </div>
    )
  }
}



export default Draggable
