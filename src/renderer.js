
const address=document.querySelector('[data-address]');
const status=document.querySelector('[data-status]');
async function openAddress(value){const result=await window.tuna.openURL(value);status.textContent=result.ok?'Opened in system browser: '+result.url:result.error;}
document.querySelector('[data-go]').addEventListener('click',()=>openAddress(address.value));
address.addEventListener('keydown',event=>{if(event.key==='Enter')openAddress(address.value);});
document.querySelectorAll('[data-search]').forEach(button=>button.addEventListener('click',()=>openAddress(button.dataset.search)));
document.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>{status.textContent=button.dataset.action+' is a planned module, not yet enabled.';}));
