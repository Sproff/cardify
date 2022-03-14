import React from "react";
import { useSelector } from "react-redux";

export const GridWrapper = ({ children }) => {
	const layout = useSelector((state) => state.layout);

	return (
		<div
			data-testid="grid-wrapper-body"
			className={
				layout === "grid"
					? "grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
					: "block"
			}
		>
			{children}
		</div>
	);
};
