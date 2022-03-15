import React from "react";
import { render } from "../utils/test-utils";
import { GridWrapper } from "../components/GridWrapper";

test("GridWrapper should contain an empty text", () => {
	const { getByTestId } = render(<GridWrapper />);
	const gridWrapperBody = getByTestId("grid-wrapper-body");

	expect(gridWrapperBody.textContent).toBe("");
});
