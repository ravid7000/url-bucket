import { randomId } from "./utils";

export default {
  changeRoute(state, route) {
    state.currentRoute = route;
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
        bucket.items.push(url);
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
