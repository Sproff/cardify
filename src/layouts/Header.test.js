import React from "react";
import { fireEvent, render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

test("card should render grid by default", () => {
	const { getByTestId } = render(<Header />);
	const orderByNameBtn = getByTestId("order-by-name-btn");

	fireEvent.click(orderByNameBtn)
  // expect()
});
