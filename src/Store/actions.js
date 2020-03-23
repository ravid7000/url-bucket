import { MUTATOR_ACTIONS } from "./contants";
import {
  getCurrentTab,
  getAllTabsData,
  createNewTab,
  createNewWindow
} from "./tabs";
import { Bucket } from "./bucket";

export default {
  async addBucket({ commit }, payload) {
    let items = [];
    if (payload.withOpenedTabs) {
      try {
        const tabData = await getAllTabsData();
        if (tabData.length) {
          tabData.forEach(tab => {
            items.push(Bucket.createUrl(tab));
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    payload.items = items;
    delete payload.withOpenedTabs;
    commit(MUTATOR_ACTIONS[0], payload);
  },
  removeBucket({ commit }, payload) {
    commit(MUTATOR_ACTIONS[1], payload);
  },
  addUrl({ commit }, payload) {
    commit(MUTATOR_ACTIONS[2], payload);
  },
  async addCurrentTab({ commit }, bucketId) {
    const tab = await getCurrentTab();
    console.log(tab);
    if (tab) {
      const url = {
        title: tab.title,
        icon: tab.favIconUrl,
        url: tab.url
      };
      commit(MUTATOR_ACTIONS[2], { bucketId, url });
    }
  },
  removeUrl({ commit }, payload) {
    commit(MUTATOR_ACTIONS[3], payload);
  },
  openNewTab(store, payload) {
    createNewTab(payload);
  },
  openNewWindow(store, payload) {
    createNewWindow(payload);
  },
  openNewIncognitoWindow(store, payload) {
    createNewWindow(payload, true);
  }
};
