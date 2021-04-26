import { AppBar as MuiAppBar } from '@material-ui/core';

import styled from "styled-components";

export const AppBar = styled(MuiAppBar)`
  background-color: unset;
`
export const Footer = styled.footer`
${({ theme }) => `
  background-color: ${theme.palette.background.paper};
  padding: ${theme.spacing(6)}px;
  position: absolute;
  bottom: 0;
  width: 100%
`}`;


