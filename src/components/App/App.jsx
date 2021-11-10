import React from 'react';
import Homepage from '../Homepage';
import GlobalStyle from '../../GlobalStyle'
import Sidebar from "../Sidebar";
import {AppContainer} from "./StyledComponents";

const App = () => (
  <>
    <AppContainer>
      <Sidebar/>
      <Homepage />
    </AppContainer>
    <GlobalStyle />
  </>
);

export default App;
