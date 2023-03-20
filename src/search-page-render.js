const electron = require("electron");
const ipc = electron.ipcRenderer;

ipc.on('start->search: content article received', function(event, content) {
    console.log(content);
});

