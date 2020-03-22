import { MUTATOR_ACTIONS } from "./actions";

export function syncDataToDatabase(store) {
  store.subscribe(mutation => {
    if (MUTATOR_ACTIONS.includes(mutation.type)) {
      console.log(mutation);
    }
    console.log(mutation, "outside");
  });
}
