export const MUTATOR_ACTIONS = [
  "addBucket",
  "removeBucket",
  "addUrl",
  "removeUrl"
];

export function syncDataToDatabase(action, state) {
  console.log(action, state);
}

export default {
  addBucket: ({ commit }, payload) => {
    payload.plugin = true;
    commit(MUTATOR_ACTIONS[0], payload);
  },
  removeBucket: ({ commit }, payload) => {
    commit(MUTATOR_ACTIONS[1], payload);
  },
  addUrl: ({ commit }, payload) => {
    commit(MUTATOR_ACTIONS[2], payload);
  },
  removeUrl: ({ commit }, payload) => {
    commit(MUTATOR_ACTIONS[3], payload);
  }
};
