
'use strict';
const {app,BrowserWindow,ipcMain,shell,session}=require('electron');
const path=require('path');
const {normalizeAddress}=require('./url-policy');
const bridge=require('../launcher/bridge');
let win;
function createWindow(){
 win=new BrowserWindow({width:1440,height:900,minWidth:900,minHeight:600,backgroundColor:'#080b0d',webPreferences:{preload:path.join(__dirname,'preload.js'),contextIsolation:true,nodeIntegration:false,sandbox:true,webviewTag:false}});
 win.loadFile(path.join(__dirname,'index.html'));
 win.webContents.setWindowOpenHandler(({url})=>{const safe=normalizeAddress(url);if(safe)shell.openExternal(safe);return {action:'deny'};});
 win.webContents.on('will-navigate',(event,url)=>{if(!url.startsWith('file://'))event.preventDefault();});
}
app.whenReady().then(()=>{
 bridge.registerProtocol(app);
 session.defaultSession.setPermissionCheckHandler(()=>false);
 session.defaultSession.setPermissionRequestHandler((_wc,_permission,callback)=>callback(false));
 ipcMain.handle('tuna:open-url',(_event,input)=>{const url=normalizeAddress(input);if(!url)return {ok:false,error:'Invalid or unsafe address'};shell.openExternal(url);return {ok:true,url};});
 ipcMain.handle('tuna:version',()=>app.getVersion());
 createWindow();
 const launch=bridge.parseLauncherArgs(process.argv);if(launch.open)shell.openExternal(launch.open);
});
app.on('second-instance',(_event,argv)=>{const request=bridge.parseLauncherArgs(argv);if(request.open)shell.openExternal(request.open);if(win){if(win.isMinimized())win.restore();win.focus();}});
app.on('open-url',(event,url)=>{event.preventDefault();const request=bridge.parseLauncherArgs([url]);if(request.open)shell.openExternal(request.open);});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
