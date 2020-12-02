import React, { Component } from 'react'
import styled from 'styled-components';
import Dnd from './component/Dnd'

const AppWrapper = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div``;

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       checked: false,
    }
  }
  
  render() {
    return (
      <div className="App">
        <AppWrapper>
          <Container>
            <Dnd/>
          </Container>
        </AppWrapper>
    </div>
    )
  }
}

export default App
