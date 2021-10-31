const { ipcMain } = require('electron')

//const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths)

    event.sender.send('process-subtitles', [
        { name: 'i', amount: 7562},
        { name: 'you', amount: 2305},
        { name: 'he', amount: 25},
        { name: 'she', amount: 2},
        { name: 'our', amount: 20},
        { name: 'house', amount: 73},
        { name: 'never', amount: 7}
    ])
})