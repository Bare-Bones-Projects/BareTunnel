# Tuna Browser v0.10.0 test report

Command: `npm run check && npm test`

Exit code: 0

```text

> tuna-browser@0.10.0 check
> node --check src/main.js && node --check src/preload.js && node --check src/renderer.js && node --check src/vault.js && node --check launcher/bridge.js && node --check src/url-policy.js


> tuna-browser@0.10.0 test
> node --test tests/*.test.js

TAP version 13
# Subtest: HTTPS normalization
ok 1 - HTTPS normalization
  ---
  duration_ms: 1.845536
  type: 'test'
  ...
# Subtest: search query
ok 2 - search query
  ---
  duration_ms: 0.683099
  type: 'test'
  ...
# Subtest: dangerous schemes are not opened directly
ok 3 - dangerous schemes are not opened directly
  ---
  duration_ms: 0.180186
  type: 'test'
  ...
# Subtest: credential URLs rejected
ok 4 - credential URLs rejected
  ---
  duration_ms: 0.340442
  type: 'test'
  ...
# Subtest: launcher rejects file URL
ok 5 - launcher rejects file URL
  ---
  duration_ms: 0.333813
  type: 'test'
  ...
# Subtest: launcher accepts HTTPS URL
ok 6 - launcher accepts HTTPS URL
  ---
  duration_ms: 2.049331
  type: 'test'
  ...
# Subtest: protocol launch accepts encoded HTTPS URL
ok 7 - protocol launch accepts encoded HTTPS URL
  ---
  duration_ms: 0.46685
  type: 'test'
  ...
# Subtest: javascript scheme is rejected
ok 8 - javascript scheme is rejected
  ---
  duration_ms: 0.14947
  type: 'test'
  ...
# Subtest: local file scheme is rejected
ok 9 - local file scheme is rejected
  ---
  duration_ms: 0.412319
  type: 'test'
  ...
# Subtest: data scheme is rejected
ok 10 - data scheme is rejected
  ---
  duration_ms: 0.717349
  type: 'test'
  ...
1..10
# tests 10
# suites 0
# pass 10
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 98.97428

```

Native installer builds: NOT RUN (Electron dependencies / platform runners not verified).
