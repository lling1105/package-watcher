const chokidar = require("chokidar");
const cmd = require('node-cmd');
const path = require('path');
const LIST = require('./watch-list');
const watcher = chokidar.watch(LIST);
const util = require('util');
watcher.on('change',pk => {
    console.log('File '+pk+' has been changed');
    let _path = path.dirname(pk);
    npminstaller(_path);
});

watcher.on('add',pk=>{
    console.log('File '+pk+' has been added');
    let _path = path.dirname(pk);
    npminstaller(_path);
})

var npminstaller = (_path)=>{
    var driver = _path.split(":")[0];
    cmd.get(util.format(
        'cd /d %s && npm install',_path),
        function(err, data, stderr){
            if (!err) {
               console.log('the node-cmd:\n\n',data);
            } else {
               console.log('error', err);
            }

        }
    );
}
