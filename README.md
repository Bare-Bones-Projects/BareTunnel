# // TUNA BROWSER · v0.10.0

A local-first Electron **prototype** for Windows, Linux, macOS, and ChromeOS Linux (Crostini). The interface opens validated HTTP/HTTPS destinations in the system browser. It does **not** yet embed a working browser engine, encrypted vault UI, private mode, or Tor integration.

## Development

```sh
npm install
npm run check
npm test
npm start
```

Electron and electron-builder must be installed via npm; CI builds require network access and OS-specific runners. Platform packaging commands are defined in `package.json`. No native installers have been built or verified here.

## Remedy Launcher bridge

`--launcher-open https://example.com` and `tunabrowser://open?url=https%3A%2F%2Fexample.com` accept HTTP/HTTPS only. No vault, cookies, or credentials are exposed to Remedy Launcher. Protocol registration depends on OS installation and user approval.

## Component references

Existing `BB-*` component IDs remain stable to avoid breaking downstream references. Historical v0.6 screenshots are archived, not presented as v0.9 UI renders.

## Security caveat

External links open in the OS default browser. This is not a privacy guarantee, VPN, Tor, anti-tracking, or zero-trace solution. All permission requests in the Electron shell are denied by default.

## v0.10 security update
See `docs/SECURITY_HARDENING.md`.
