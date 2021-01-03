const pluginFolder1 = './src/plugins/';
const kibanaPluginsFolder = './x-pack/plugins/';
const fs = require('fs');
const path = require('path');
const os = require('os');
const request = require('request');

const index = "dependencies6"
function addData(id, requiredPlugins, requiredBundles) {

    request.post("http://elastic:changeme@127.0.0.1:9200/" + index + "/_doc", { headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, requiredBundles, requiredPlugins }) }, (error, response, body) => {

        console.log("error:" + error);
        console.log("response:" + JSON.stringify(response));
        console.log("body:" + body);
    });


}
const content = fs.readFileSync('./love.json');
const contentparsed = JSON.parse(content);

contentparsed.forEach(e => {
    console.log(e);
    addData(e.id, e.requiredPlugins, e.requiredBundles);
})