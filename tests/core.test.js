
const test=require('node:test');const assert=require('node:assert/strict');
const {normalizeAddress}=require('../src/url-policy');const {parseLauncherArgs}=require('../launcher/bridge');
test('HTTPS normalization',()=>assert.equal(normalizeAddress('example.com'),'https://example.com/'));
test('search query',()=>assert.match(normalizeAddress('cats and dogs'),/^https:\/\/duckduckgo.com\/\?q=/));
test('dangerous schemes are not opened directly',()=>assert.notEqual(normalizeAddress('javascript:alert(1)'),'javascript:alert(1)'));
test('credential URLs rejected',()=>assert.equal(normalizeAddress('https://user:pass@example.com'),null));
test('launcher rejects file URL',()=>assert.equal(parseLauncherArgs(['--launcher-open','file:///etc/passwd']).open,null));
test('launcher accepts HTTPS URL',()=>assert.equal(parseLauncherArgs(['--launcher-open','https://example.com']).open,'https://example.com/'));
test('protocol launch accepts encoded HTTPS URL',()=>assert.equal(parseLauncherArgs(['tunabrowser://open?url=https%3A%2F%2Fexample.com']).open,'https://example.com/'));
test('javascript scheme is rejected',()=>assert.equal(normalizeAddress('javascript:alert(1)'),null));
test('local file scheme is rejected',()=>assert.equal(normalizeAddress('file:///etc/passwd'),null));
test('data scheme is rejected',()=>assert.equal(normalizeAddress('data:text/html,test'),null));
