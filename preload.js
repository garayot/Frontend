const { contextBridge,ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('axios', {
  openAI: (ingredients) => ipcRenderer.invoke('axios.openAI',ingredients)
})