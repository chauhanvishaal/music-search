import React from "react";
import {
  MuiThemeProvider,
  useTheme,
} from "@material-ui/core/styles";

import { ThemeProvider } from "styled-components";
import {
  // AppBar,
  Container,
  CssBaseline,
  Toolbar,
} from "@material-ui/core";
import { Search, SearchResults, SearchEntities } from "..";

import { AppBar, Footer } from "./styles";

export function Layout() {
  const theme = useTheme();
  // console.log(theme)
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AppBar position="relative">
            <Toolbar>
              <Search />
              <SearchEntities/>
            </Toolbar>
          </AppBar>
          <main>
            <Container maxWidth="sm">
              <SearchResults />
            </Container>
          </main>
          {/* <Footer>Footer</Footer> */}
        </ThemeProvider>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
