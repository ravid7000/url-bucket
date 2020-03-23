/* eslint-disable no-undef */
function isChromeTabs() {
  return chrome && "tabs" in chrome;
}

export function getCurrentTab() {
  return new Promise((resolve, reject) => {
    try {
      if (isChromeTabs()) {
        chrome.tabs.getCurrent(resolve);
      } else {
        resolve(null);
      }
    } catch (err) {
      reject(err);
    }
  });
}

export function getAllTabsData() {
  return new Promise((resolve, reject) => {
    try {
      if (isChromeTabs()) {
        chrome.tabs.query({}, result => {
          resolve(
            result.map(res => ({
              title: res.title,
              url: res.url,
              icon: res.favIconUrl
            }))
          );
        });
      } else {
        resolve([]);
      }
    } catch (err) {
      reject(err);
    }
  });
}

export function createNewTab(urls, windowId) {
  return new Promise((resolve, reject) => {
    try {
      if (isChromeTabs()) {
        if (urls.length === 1) {
          chrome.tabs.create({ url, windowId }, resolve);
        } else {
          const tabsCreated = [];
          const cb = tab => {
            tabsCreated.push(tab);
            if (tabsCreated.length === urls) {
              resolve(tabsCreated);
            }
          };
          urls.forEach(url => chrome.tabs.create({ url, windowId }, cb));
        }
      } else {
        resolve(null);
      }
    } catch (err) {
      reject(err);
    }
  });
}

export function createNewWindow(urls, incognito) {
  return new Promise((resolve, reject) => {
    try {
      if (isChromeTabs()) {
        const first = urls.shift();
        const cb = async windows => {
          if (urls.length && windows) {
            const tabs = await createNewTab(urls, windows.id);
            resolve({ windows, tabs });
          }
        };
        if (first) {
          chrome.windows.create({ url: first, focused: true, incognito }, cb);
        } else {
          resolve(null);
        }
      }
    } catch (err) {
      reject(err);
    }
  });
}

export function isAllowedIncognitoAccess() {
  return new Promise((resolve, reject) => {
    try {
      if (isChromeTabs()) {
        chrome.extension.isAllowedIncognitoAccess(resolve);
      } else {
        resolve(true);
      }
    } catch (err) {
      reject(err);
    }
  });
}
