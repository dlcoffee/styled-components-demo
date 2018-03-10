import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: cadetblue;
`;

class App extends React.Component {
  render () {
    return <Title>This is a styled component!</Title>;
  }
};

export default App;
