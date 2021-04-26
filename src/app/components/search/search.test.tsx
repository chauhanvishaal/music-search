import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
import { render, fireEvent, screen } from "../../test-utils/index";
import { Search } from "..";

describe("Search component Tests", () => {
    
    // it("should not call searchHandler if length of text is less than 4", () => {
    //     const mockSearchHandler = jest.fn();
    //     render(<Search />);

    //     fireEvent.change(
    //         screen.getByPlaceholderText(/Search artist, song or album/i),
    //         {
    //             target: { value: "Sa" },
    //         }
    //     );

    //     expect(mockSearchHandler).toHaveBeenCalledTimes(0);
    // });

    it("should call searchHandler if length of text is more than 2", () => {
        const mockSearchHandler = jest.fn();
        const { dispatch } = render(<Search />, {initialState: {searchTerm: "Sam"}});

        fireEvent.change (
            screen.getByPlaceholderText(/Search artist, song or album/i),
            {
                target: { value: "Sam s" },
            }
        );

        expect(dispatch).toHaveBeenCalledTimes(1);
    });
    
});
