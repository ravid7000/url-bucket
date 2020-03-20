module.exports = {
  popup: {
    lib: "./lib/"
  },
  browser_action: {
    default_icon: "favicon.ico",
    default_popup: "index.html",
    default_title: "Url Bucket"
  },
  permissions: ["activeTab", "tabs", "storage"]
};
