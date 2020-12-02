import React from 'react';
import styled from 'styled-components';
import Draggable from './Draggable'
import Droppable from './Droppable'
import Designable from './Designable'

const Wrapper = styled.div`
  width:100%;
  padding:32px;
  display:flex;
  justify-content: center;
`;

const Items = styled.div` 
  padding: 8px;
  color: #fff;
  background-color: #666;
  border-radius: 3px;
`;




export default class Dnd extends React.Component{
  render(){
    return(
      <div>
      <Wrapper>
        <Droppable id="dr1" >
       
        </Droppable>
        <Designable id="dr1">
        <Draggable id="item1" style={{margin:'8px'}}><Items>Image</Items> </Draggable>
          <Draggable id="item2" style={{margin:'8px'}}><Items>Text</Items> </Draggable>
          <Draggable id="item3" style={{margin:'8px'}}><Items>Price</Items> </Draggable>
          <Draggable id="item4" style={{margin:'8px'}}><Items>Source Code</Items> </Draggable>
          <Draggable id="item5" style={{margin:'8px'}}><Items>Expiration Date</Items> </Draggable>
        </Designable>
      </Wrapper>
      
       </div>
      
    )
  }
}