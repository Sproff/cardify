import React from "react";
import { render } from "../utils/test-utils";
import { Card } from "../components/Card";

test("card should render grid by default", () => {
	const { getByTestId } = render(<Card />);
	const cardBody = getByTestId("card-body");

	expect(cardBody.className).toBe("flex items-center");
});
