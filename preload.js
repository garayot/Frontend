const { contextBridge,ipcRenderer } = require('electron')
const Toastify = require('toastify-js');

contextBridge.exposeInMainWorld('axios', {
  openAI: (ingredients) => ipcRenderer.invoke('axios.openAI',ingredients)
})
contextBridge.exposeInMainWorld("Toastify", {
  showToast: (options) => Toastify(options).showToast()
});