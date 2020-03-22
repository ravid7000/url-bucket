/* eslint-disable no-undef */
function isChromeStorage() {
  return chrome && "storage" in chrome;
}

function createStorage() {
  return {
    set: function(key, value) {
      return new Promise((resolve, reject) => {
        try {
          if (isChromeStorage()) {
            chrome.storage.sync.set({ [key]: value }, resolve);
          } else {
            window.localStorage.setItem(key, value);
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      });
    },
    get: function(key) {
      return new Promise((resolve, reject) => {
        try {
          if (isChromeStorage()) {
            chrome.storage.sync.get(key, result => resolve(result[key]));
          } else {
            resolve(window.localStorage.getItem(key));
          }
        } catch (err) {
          reject(err);
        }
      });
    }
  };
}

function Database() {
  this.store = createStorage();
}

Database.prototype.update = async function(key, data) {
  await this.store.set(key, JSON.stringify(data));
};

Database.prototype.select = async function(query) {
  const obj = await this.store.get(query);
  return obj ? JSON.parse(obj) : obj;
};

Database.prototype.delete = async function(key) {
  await this.store.set(key, JSON.stringify({}));
};

export default Database;
