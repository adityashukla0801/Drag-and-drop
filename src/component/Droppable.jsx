import React, { Component } from 'react'


export class Droppable extends Component {
  constructor(props) {
    super(props)
    this.state = {
       count: 0
    }
  }
  

  drop = (e) =>{
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
    console.log(e.target.children[this.state.count].innerHTML,'----------');  
    let p = document.createElement('p');
    p.innerHTML = e.target.children[this.state.count].innerHTML
    document.getElementById('list').appendChild(p)
    this.setState({
      count: this.state.count + 1
    });
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
              <div style={{height:'50vh', width:'45vw', border:'2px dotted grey'}} className='ml-5 mt-2'></div>
          </div>
          <div className='bg-secondary my-4 p-2' id="list"><h4>Dragged Items</h4></div>
      </div>
    )
  }
}



export default Droppable


