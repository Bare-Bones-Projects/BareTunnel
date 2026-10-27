const crypto=require('crypto');function deriveKey(secret,salt){return crypto.scryptSync(secret,salt,32,{N:32768,r:8,p:1,maxmem:64*1024*1024})}module.exports={deriveKey};
