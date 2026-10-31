'use strict';
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const platform=process.argv[2];
const extensions={win:['.exe'],linux:['.AppImage','.deb'],mac:['.dmg','.zip']};
if(!Object.hasOwn(extensions,platform)){console.error('Usage: node scripts/verify-dist.js win|linux|mac');process.exit(2);}
const dir=path.resolve('dist');
if(!fs.existsSync(dir)){console.error('Missing dist directory');process.exit(1);}
const names=fs.readdirSync(dir).filter(n=>fs.statSync(path.join(dir,n)).isFile());
const found=names.filter(n=>extensions[platform].some(ext=>n.endsWith(ext)));
for(const ext of extensions[platform]){
 if(!found.some(n=>n.endsWith(ext))){console.error('Missing expected '+ext+' artifact');process.exitCode=1;}
}
if(process.exitCode)process.exit();
const lines=found.sort().map(n=>{
 const bytes=fs.readFileSync(path.join(dir,n));
 if(bytes.length<1024)throw new Error('Suspiciously small artifact: '+n);
 return crypto.createHash('sha256').update(bytes).digest('hex')+'  '+n;
});
fs.writeFileSync(path.join(dir,'SHA256SUMS.txt'),lines.join('\n')+'\n');
console.log('Verified '+found.length+' packages; wrote SHA256SUMS.txt');
