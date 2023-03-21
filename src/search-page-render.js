const electron = require("electron");
const ipc = electron.ipcRenderer;
const title = document.querySelector(".title");
const body = document.querySelector(".content");

ipc.on('start->search: content article received', function(event, articleContent) {
    body.textContent = articleContent;
});

ipc.on('start->search: title received', function(event, articleTitle) {
    title.textContent = articleTitle;
});