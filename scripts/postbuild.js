const path = require("path");
const fs = require("fs").promises;
const pkg = require("../package.json");
const config = require("../app.config.js");

const BASE_PATH = process.cwd();

const writeFile = async (fileName, content) =>
  await fs.writeFile(path.resolve(BASE_PATH, fileName), content);

function createBrowserAction() {
  return {
    default_icon: config.popup.lib + config.browser_action.default_icon,
    default_popup: config.popup.lib + config.browser_action.default_popup,
    default_title: config.popup.lib + config.browser_action.default_title
  };
}

async function createManifest() {
  const manifest = {
    name: pkg.name.replace("-", " "),
    version: pkg.version,
    manifest_version: 2,
    description: pkg.description,
    browser_action: createBrowserAction(config.browser_action)
  };

  await writeFile("./manifest.json", JSON.stringify(manifest));
}

async function run() {
  await createManifest();
}

run();
