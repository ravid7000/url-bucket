module.exports = {
  popup: {
    lib: "dist/"
  },
  browser_action: {
    default_icon: "favicon.png",
    default_popup: "index.html",
    default_title: "Url Bucket"
  },
  permissions: ["activeTab", "tabs"]
};
