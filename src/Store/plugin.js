import DB from "./db";
import { BUCKETS_KEY, MUTATOR_ACTIONS } from "./contants";

const dataBase = new DB();

export function syncDataToDatabase(store) {
  store.subscribe(mutation => {
    if (MUTATOR_ACTIONS.includes(mutation.type)) {
      // eslint-disable-next-line no-console
      console.log(mutation, store.state);
    }
  });
}

export function syncBucketToDatabase(store) {
  store.subscribe(mutation => {
    if (MUTATOR_ACTIONS.includes(mutation.type)) {
      const { buckets } = store.state;
      dataBase.update(BUCKETS_KEY, buckets);
    }
  });
}
