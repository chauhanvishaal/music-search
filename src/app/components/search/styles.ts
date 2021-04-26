import styled from "styled-components";
import { InputBase } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";


// const SearchContainer = styled.div`
//   ${({ theme }) => `
//         position: relative;
//         border: 1px solid rgba(0, 0, 0, 0.12);
//         padding: 7px;
//         border-radius: 5px;
//         background-color: ${fade(theme.palette.common.white, 0.15)};
//         &:hover: {
//           background-color: ${fade(theme.palette.common.white, 0.25)};
//         }
//         margin-left: 0;
//         width: 100%;
//         ${theme.breakpoints.up("sm")} {
//           margin-left: ${theme.spacing(1)};
//           width: auto;
//         }
//     `}
// `;

const SearchContainer = styled.div`
  ${({ theme }) => `
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.12);
        padding: 7px;
        border-radius: 5px;
        margin-left: 0;
        width: 100%;
    `}
`;

const SearchInput = styled(InputBase)`
  ${({ theme }) => `
          flex-grow: 1;
          color: inherit,
          padding: 1, 1, 1, 0;
          padding-left: 30px;
          width: 100%;
      `}
`;

const IconSearch = styled(SearchIcon)`
  ${({ theme }) => `
      color: rgba(0, 0, 0, 0.12);
      padding-bottom: 5px;
      height: 100%;
      position: absolute;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export { IconSearch, SearchInput, SearchContainer  }
