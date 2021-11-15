import React from 'react';
import TaskPage from './components/TaskPage';
import GlobalStyle from './GlobalStyle'
import Sidebar from "./components/Sidebar";
import {AppContainer} from "./common/styles/AppStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddProject from "./components/AddProject";

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Sidebar/>
      <Routes>
        <Route path={'/project/'} element={<TaskPage />} />
        <Route path={'/project/:id'} element={<TaskPage />} />
        <Route path={'/project/add'} element={<AddProject />} />
      </Routes>
    </AppContainer>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
