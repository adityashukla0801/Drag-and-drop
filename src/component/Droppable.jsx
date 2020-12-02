import React, { Component } from 'react'


export class Droppable extends Component {

  drop = (e) =>{
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
    console.log(e.target.children, '---');
    let p = document.createElement('p');
    p.innerHTML = e.target.children[0].children[0].innerHTML
    document.getElementById('list').appendChild(p)
  }

  allowDrop = (e) =>{
    e.preventDefault();
  }

  render() {
    return (
      <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style} >
        {this.props.children}
        <div style={{height:'60vh', width:'50vw'}} className='m-2 border border-secondary rounded'>
              <h4 className='bg-secondary p-2 border-bottom border-secondary' >Drwing Palette</h4>
              <div style={{height:'40vh', width:'40vw', border:'2px dotted grey'}} className='mt-5 ml-5 pl-4'></div>
          </div>
          <div className='bg-secondary my-3 p-2' id="list">Dragged Items</div>
      </div>
    )
  }
}



export default Droppable


