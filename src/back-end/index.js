const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const grupedWords = require('./grupWords')

ipcMain.on('process-subtitles', (event, paths) => {
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => grupedWords(words))
        .then(grupWords => event.sender.send('process-subtitles', grupWords))
})