const pluginFolder1 = './src/plugins/';
const kibanaPluginsFolder = './x-pack/plugins/';
const fs = require('fs');
const path = require('path');
const os = require('os');


function readFolder() {
    let res = [];
    const folder = [pluginFolder1, kibanaPluginsFolder];
    console.log("start");

    folder.forEach(f => {
        console.log("f:" + f);
        fs.readdir(f, (err, files) => {
            console.log(files);
            files.forEach(pluginFolder => {

                const kibanaFileJson = f + pluginFolder + "/" + "kibana.json";
                // if (fs.existsSync(kibanaFileJson)) {
                console.log("path kibana file:" + kibanaFileJson);

                if (fs.existsSync(kibanaFileJson)) {
                    fs.readFile(kibanaFileJson, 'utf8', (err, f) => {
                        if (err) {
                            console.log("error:" + err);
                            return;
                        }
                        const kibanaDeclarationFile = JSON.parse(f);

                        fs.appendFileSync('./love.love', JSON.stringify(kibanaDeclarationFile) + ",");
                    })
                }
                // }

            });
        });

    });
}
fs.writeFile('./love.love', "[", undefined, () => {

    readFolder(pluginFolder1);
    readFolder(kibanaPluginsFolder);
});


