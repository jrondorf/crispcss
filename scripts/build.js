import fs from 'fs';
import path from 'path';

const componentsDir = './components';
const cssOut = './css/crisp.css';
const jsOut = './js/crisp.js';
const cssMinOut = './css/crisp.min.css';
const jsMinOut = './js/crisp.min.js';

const getFiles = (ext) =>
  fs.readdirSync(componentsDir).flatMap((comp) => {
    const dir = path.join(componentsDir, comp);
    return fs.readdirSync(dir)
      .filter(file => file.endsWith(ext))
      .map(file => fs.readFileSync(path.join(dir, file), 'utf-8'));
  });

const minify = (code) => code.replace(/\s+/g, ' ').trim();

const build = () => {
  const css = getFiles('.css').join('\n\n');
  const js = getFiles('.js').join('\n\n');

  fs.writeFileSync(cssOut, css, 'utf-8');
  fs.writeFileSync(jsOut, js, 'utf-8');
  fs.writeFileSync(cssMinOut, minify(css), 'utf-8');
  fs.writeFileSync(jsMinOut, minify(js), 'utf-8');
  console.log('✅ Build complete: crisp.css, crisp.min.css, crisp.js, crisp.min.js');
};

build();
