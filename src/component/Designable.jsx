import React, { Component } from 'react'


export class Droppable extends Component {

  drop = (e) =>{
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
  }

  allowDrop = (e) =>{
    e.preventDefault();
  }

  render() {
    return (
      <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style} >
       
        <div style={{height:'60vh', width:'20vw'}} className='m-2 border border-secondary rounded '>
          <h4 className='bg-secondary p-2 border-bottom border-secondary'>Design Object Palette</h4>
          {this.props.children}
          </div>
      </div>
    )
  }
}



export default Droppable


