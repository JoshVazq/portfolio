import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/App";

/* import * as contentful from "contentful";

var client = contentful.createClient({
  space: "mhfu0fsind5z",
  accessToken:
    "0b0cce386c990c73efc99a48bb3fb59d3df3fdd8ce4ce7a968da5b6b91352132"
});
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if (entry.fields) {
      console.log(entry.fields);
    }
  });
}); */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
