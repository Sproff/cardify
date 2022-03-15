import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store/configureStore";

const ReduxProvider = ({ children }) => {
	return (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	);
};

const reduxRender = (ui, options) =>
	render(ui, { wrapper: ReduxProvider, ...options });

export * from "@testing-library/react";

export { reduxRender as render };
