import { createClient } from "contentful";
import resolveResponse from "contentful-resolve-response";
import { API_REQUEST, apiSuccess, apiError } from "./actions";
import * as profileFixure from "../../test/fixtures/contentful/entries_profile.json";

const client = createClient({
  space: "mhfu0fsind5z",
  accessToken:
    "0b0cce386c990c73efc99a48bb3fb59d3df3fdd8ce4ce7a968da5b6b91352132"
});

export const apiMiddleware = ({ dispatch }: any) => (next: Function) => (action: any) => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { entryId, entity } = action.meta;
    return client
      .getEntries({ "sys.id": entryId })
      .then(entries => {
        const items = resolveResponse(entries)
        dispatch(apiSuccess(items[0], entity));
      })
      .catch(error => dispatch(apiError(error, entity)));
  }
};
