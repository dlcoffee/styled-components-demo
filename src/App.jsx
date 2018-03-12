import * as React from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components'

import reset from './css/reset'

const baseStyles = () => {
  injectGlobal`${reset}`;
};

const Container = styled.div`
  background: cadetblue;
`;

const Title = styled.h1`
  color: peachpuff;
  font-size: 1.5em;
  text-align: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    baseStyles();
  };

  render () {
    return <Container className="still available">
      <Title>This is a styled component!</Title>
    </Container>;
  }
};

export default App;
