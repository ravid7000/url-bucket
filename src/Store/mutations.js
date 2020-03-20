import { randomId } from "./utils";

export default {
  initBucketData(state, buckets) {
    state.buckets = buckets || [];
  },
  changeRoute(state, route) {
    state.currentRoute = route;
  },
  setCurrentBack(state, bucketId) {
    state.currentBucket = bucketId;
  },
  addBucket(state, bucket) {
    bucket.id = randomId();
    bucket.created = Date.now();
    bucket.items = [];
    state.buckets.unshift(bucket);
  },
  removeBucket(state, bucketId) {
    const { buckets } = state;
    state.buckets = buckets.filter(bucket => {
      return bucket.id !== bucketId;
    });
  },
  addUrl(state, { bucketId, url }) {
    url.id = randomId(8);
    url.created = Date.now();
    state.buckets.map(bucket => {
      if (bucket.id === bucketId) {
        bucket.items.unshift(url);
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
