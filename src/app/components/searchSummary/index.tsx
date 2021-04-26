import React from "react";
import { Typography } from "@material-ui/core";
import { Props } from "./types";
import { SearchSummaryContainer } from "./styles";

export const SearchSummary: React.FC<Props>  = (props: Props) => {

    return (
        <SearchSummaryContainer>
            <Typography component="h2">
                {props.searchResultSummary}
            </Typography>
        </SearchSummaryContainer> 
    )
} 