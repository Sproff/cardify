import React from "react";
import { fireEvent, render } from "../utils/test-utils";
import Header from "../layouts/Header";

test("input value should be a string", () => {
	const { getByTestId } = render(<Header />);
	const searchInput = getByTestId("search-input");

	fireEvent.change(searchInput, { target: { value: "" } });
});

test("button should have a content related to name", () => {
	const { getByTestId } = render(<Header />);
	const orderByName = getByTestId("order-by-name-btn");

	fireEvent.click(orderByName);
	expect(orderByName.textContent).toBe("Order by name");
});

test("button should have a content related to creation", () => {
	const { getByTestId } = render(<Header />);
	const orderByCreation = getByTestId("order-by-creation-btn");

	fireEvent.click(orderByCreation);
	expect(orderByCreation.textContent).toBe("Order by creation");
});

test("grid icon should return an empty string", () => {
	const { getByTestId } = render(<Header />);
	const gridLayout = getByTestId("grid-layout");

	fireEvent.click(gridLayout);
	expect(gridLayout.textContent).toBe("");
});

test("list icon should return an empty string", () => {
	const { getByTestId } = render(<Header />);
	const listlayout = getByTestId("list-layout");

	fireEvent.click(listlayout);
	expect(listlayout.textContent).toBe("");
});
