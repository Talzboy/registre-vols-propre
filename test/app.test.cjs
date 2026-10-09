const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const htmlPath = path.join(__dirname, '..', 'www', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

test('le JavaScript intégré à la page est syntaxiquement valide', () => {
  const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1].trim())
    .filter(Boolean);

  assert.ok(scripts.length > 0, 'aucun script JavaScript intégré trouvé');
  for (const script of scripts) {
    assert.doesNotThrow(() => new vm.Script(script));
  }
});

test('tous les éléments ciblés par getElementById existent dans la page', () => {
  const elementIds = new Set([...html.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]));
  const referencedIds = new Set(
    [...html.matchAll(/getElementById\(["']([^"']+)["']\)/g)].map((match) => match[1])
  );
  const missingIds = [...referencedIds].filter((id) => !elementIds.has(id));

  assert.deepEqual(missingIds, []);
});