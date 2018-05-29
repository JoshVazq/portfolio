import * as contentful from "contentful";
import { API_REQUEST, apiSuccess, apiError } from "./actions";

const client = contentful.createClient({
  space: "mhfu0fsind5z",
  accessToken:
    "0b0cce386c990c73efc99a48bb3fb59d3df3fdd8ce4ce7a968da5b6b91352132"
});

export const apiMiddleware = ({ dispatch }: any) => (next: Function) => (action: any) => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { entryId, entity } = action.meta;
    client
      .getEntries({ "sys.id": entryId })
      .then(entries => dispatch(apiSuccess(entries.items[0], entity)))
      .catch(error => dispatch(apiError(error, entity)));
  }
};
