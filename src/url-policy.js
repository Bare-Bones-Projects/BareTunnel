
'use strict';
function normalizeAddress(value) {
  if (typeof value !== 'string' || value.length > 2048) return null;
  const raw = value.trim();
  if (!raw || /[\u0000-\u001f\u007f]/.test(raw) || /^[a-z][a-z0-9+.-]*:/i.test(raw) && !/^https?:\/\//i.test(raw)) return null;
  const candidate = /^https?:\/\//i.test(raw) ? raw : (/^[\w.-]+(?::\d+)?(?:[\/?#]|$)/.test(raw) && raw.includes('.') ? `https://${raw}` : `https://duckduckgo.com/?q=${encodeURIComponent(raw)}`);
  try { const u = new URL(candidate); if (!['http:', 'https:'].includes(u.protocol) || u.username || u.password) return null; return u.href; } catch { return null; }
}
module.exports={normalizeAddress};
