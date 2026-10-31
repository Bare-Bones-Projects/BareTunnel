# Tuna Browser v0.10.0 alpha testing
Official source: https://github.com/BareBones-Projects/Tuna-Browser
Companion: https://github.com/BareBones-Projects/Remedy-Launcher

## Run the builds
Actions > Tuna Browser alpha builds > Run workflow.
Download the workflow artifacts after the three platform jobs succeed.

## Scope
Windows x64: unsigned NSIS and portable builds.
Linux x64: AppImage and deb.
macOS arm64: unsigned DMG/ZIP (may require manual Gatekeeper exception in a trusted test environment).
ChromeOS: try the Linux deb within supported Crostini environments; not a native ChromeOS app.
Arch/Omarchy: AppImage smoke test. These builds are not proof of compatibility.

## Smoke test
1. Verify downloaded archive integrity and provenance.
2. Install or extract on a disposable test profile.
3. Launch application and check UI rendering.
4. Enter a safe HTTPS URL and confirm it opens in the OS default browser.
5. Verify javascript:, file:, and credential-bearing URLs are blocked.
6. Test restart, close, and uninstall.
7. Record OS version, architecture, result, and logs.

## Known limitations
The Electron app is a prototype, not yet an embedded browser engine.
No verified Tor routing, encrypted vault UI, or private mode.
Do not store sensitive data or treat this build as a secure browser.
Unsigned installers can trigger operating-system security warnings.
