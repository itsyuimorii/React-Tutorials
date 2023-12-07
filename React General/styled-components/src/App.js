import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import React from "react";
import { ThemeProvider } from "styled-components";
import Globalstyled from "./components/styles/Global";

const theme = {
  color: {
    header: "lightyellow",
    body: "lightgreen",
    footer: "lightblue",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Globalstyled />
        <Header />
        <Container>
          <h1>Hello</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
