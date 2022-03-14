import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "./Card";

test("card should render grid by default", () => {
	const { getByTestId } = render(<Card />);
	const cardBody = getByTestId("card-body");

	expect(cardBody.textContent).toBe("grid");
});
