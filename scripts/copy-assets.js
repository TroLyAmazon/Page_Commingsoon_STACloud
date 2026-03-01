const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'picture');
const dest = path.join(__dirname, '..', 'public', 'picture');

if (!fs.existsSync(src)) {
  console.log('picture/ not found, skip copy-assets');
  process.exit(0);
}

fs.mkdirSync(dest, { recursive: true });
for (const name of fs.readdirSync(src)) {
  const srcFile = path.join(src, name);
  if (fs.statSync(srcFile).isFile()) {
    fs.copyFileSync(srcFile, path.join(dest, name));
    console.log('Copied picture/' + name + ' → public/picture/');
  }
}
