import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import App from "./components/App";
const store = configureStore();

/* istanbul ignore next */
{
  const node = document.getElementById("root");
  if (node) {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      node
    );
  }
}