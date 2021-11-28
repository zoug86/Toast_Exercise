import React from 'react';
import Container from '@mui/material/Container';
import { ToastContextProvider } from './context/ToastContext';

import Header from './Header';
import Content from './Content';

function App() {
  return (
    <ToastContextProvider>
      <Header />
      <Container>
        <Content />
      </Container>
    </ToastContextProvider>
  );
}

export default App;
