# Tuna Browser v0.10.0 alpha testing

## GitHub Actions
1. Upload this directory's contents to `Bare-Bones-Projects/Tuna-Browser` (retain `.github/workflows`).
2. Open Actions > Browser packaging (unverified) > Run workflow.
3. Download the `tuna-linux`, `tuna-win`, and `tuna-mac` workflow artifacts once jobs succeed.
4. Run installation and launch checks on actual Windows, Ubuntu/Arch Linux, and macOS hardware. ChromeOS requires Linux (Crostini) enabled and a compatible Debian package.

## Known limits
This is an Electron shell prototype that opens web links in the OS default browser, not an embedded browser. Do not describe it as a secure browser, Tor client, or release candidate. Installer signing/notarization is not configured. Windows SmartScreen and macOS Gatekeeper may warn about unsigned alpha binaries. Do not advise users to disable security protections.

## Acceptance checklist
- [ ] CI checks pass on all runners
- [ ] Installer artifacts produced
- [ ] Clean install/uninstall tested on Windows
- [ ] AppImage and deb launch on Linux
- [ ] macOS DMG launches with expected security prompts and signing plan
- [ ] HTTP/HTTPS navigation behaves as documented
- [ ] file/javascript/data URL inputs rejected
- [ ] Remedy Launcher handoff verified without sharing credentials
- [ ] SHA256 checksums and release notes published
