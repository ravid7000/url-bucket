export default {
  bucketById: state => id => {
    return state.buckets ? state.buckets.filter(buck => buck.id === id)[0] : [];
  },
  bucketItemsById: (state, getters) => id => {
    const bucket = getters.bucketById(id);
    return bucket ? bucket.items : [];
  }
};
