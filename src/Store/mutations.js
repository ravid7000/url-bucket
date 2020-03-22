import { Bucket } from "./bucket";

export default {
  initBucketData(state, buckets) {
    state.buckets = buckets || [];
  },
  changeRoute(state, route) {
    state.currentRoute = route;
  },
  setCurrentBucket(state, bucketId) {
    state.currentBucket = bucketId;
  },
  addBucket(state, bucket) {
    state.buckets.unshift(Bucket.create(bucket));
  },
  removeBucket(state, bucketId) {
    const { buckets } = state;
    state.buckets = buckets.filter(bucket => {
      return bucket.id !== bucketId;
    });
  },
  addUrl(state, { bucketId, url }) {
    state.buckets.map(bucket => {
      if (bucket.id === bucketId) {
        bucket.items.unshift(Bucket.createUrl(url));
      }
      return bucket;
    });
  },
  removeUrl(state, { bucketId, urlId }) {
    state.buckets.map(bucket => {
      if (bucket.id === bucketId) {
        bucket.items = bucket.items.filter(url => url.id !== urlId);
      }
      return bucket;
    });
  }
};
