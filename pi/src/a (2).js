const { ipcRenderer, contextBridge, ipcMain } = require("electron")
const { spawn } = require('child_process');
const path = require('path');



contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  },
  
});
contextBridge.exposeInMainWorld('api', {
  runPythonScript: (args) => { // add an args parameter
    console.log('Running Python script');
    const pythonScriptPath = path.join(__dirname, 'sosel.py');
    console.log(pythonScriptPath);
    const python = spawn('python', [pythonScriptPath, ...args]); // spread the args array

    python.stdout.on('data', function (data) {
      console.log('Received data from Python script:', data.toString());
      ipcRenderer.send('python-data', data.toString());
    });

    python.stderr.on('data', function (data) {
      console.error('Error from Python script:', data.toString());
    });

    python.on('close', (code) => {
      console.log('Python script closed with code:', code);
      ipcRenderer.send('python-close', code);
    });

    python.on('error', (error) => {
      console.error('Error running Python script:', error);
    });
  },
});