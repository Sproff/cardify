import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GridWrapper } from "./GridWrapper";

test("GridWrapper should contain both grid and block layout names", () => {
	const { getByTestId } = render(<GridWrapper />);
	const gridWrapperBody = getByTestId("grid-wrapper-body");

	expect(gridWrapperBody.textContent).toBe("grid, block");
});
