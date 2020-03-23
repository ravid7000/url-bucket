export default {
  bucketById: state => id => {
    if (!id) {
      return {};
    }
    return state.buckets ? state.buckets.filter(buck => buck.id === id)[0] : {};
  },
  getCurrentBucket: (state, getters) => {
    return getters.bucketById(state.currentBucket);
  },
  getCurrentBucketItems: (state, getters) => {
    return getters.bucketById(state.currentBucket).items || [];
  },
  getSettings: state => {
    return state.settings;
  }
};
