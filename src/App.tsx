import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Home from './pages/Home';
import User from './pages/User';

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
`;

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/users/:username" component={User} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );
}

export default App;
