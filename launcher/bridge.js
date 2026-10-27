
'use strict';
const { normalizeAddress } = require('../src/url-policy');
const PROTOCOL = 'tunabrowser';
function parseLauncherArgs(argv=[]) {
  const args=Array.isArray(argv)?argv:[];
  const result={ping:args.includes('--launcher-ping'),open:null};
  const index=args.indexOf('--launcher-open');
  if(index>=0 && index+1<args.length) result.open=normalizeAddress(args[index+1]);
  const protocolArg=args.find(a=>typeof a==='string' && a.startsWith('tunabrowser://'));
  if(protocolArg){try{const url=new URL(protocolArg); if(url.hostname==='open')result.open=normalizeAddress(url.searchParams.get('url'));}catch{}}
  return result;
}
function registerProtocol(app) { if (process.defaultApp && process.argv.length>=2) app.setAsDefaultProtocolClient(PROTOCOL,process.execPath,[require('path').resolve(process.argv[1])]); else app.setAsDefaultProtocolClient(PROTOCOL); }
module.exports={PROTOCOL,parseLauncherArgs,registerProtocol};
