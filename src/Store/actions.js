import { MUTATOR_ACTIONS } from "./contants";

export default {
  addBucket: ({ commit }, payload) => {
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
