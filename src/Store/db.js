/* eslint-disable no-undef */
function isChromeStorage() {
  return chrome && "storage" in chrome;
}

function createStorage() {
  return {
    set: function(key, value) {
      if (isChromeStorage()) {
        chrome.storage.sync.set(key, value);
      } else {
        window.localStorage.setItem(key, value);
      }
    },
    get: function(key) {
      if (isChromeStorage()) {
        chrome.storage.sync.get(key);
      } else {
        window.localStorage.getItem(key);
      }
    }
  };
}

function Database() {
  const storeKey = "URLBUCKET_STORAGE_KEY";
  this.store = createStorage();
  this.update = function(data) {
    this.store.set(storeKey, JSON.stringify(data));
  };
  this.select = function(query) {
    if (query === "*") {
      return this.store.get(storeKey);
    }
    const obj = this.store.get(storeKey);
    return typeof obj === "object" && obj ? obj[query] : obj;
  };
  this.delete = function() {
    this.store.set(storeKey, "");
  };
}

export default Database;
