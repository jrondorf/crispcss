import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const toKebabCase = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

rl.question('Enter component name (e.g. modal): ', (name) => {
  const kebab = toKebabCase(name);
  const className = `crisp-${kebab}`;
  const folder = `components/${kebab}`;
  const cssFile = `${folder}/${className}.css`;
  const jsFile = `${folder}/${className}.js`;
  const htmlFile = `${folder}/preview.html`;

  if (fs.existsSync(folder)) {
    console.error(`❌ Component ${kebab} already exists.`);
    rl.close();
    return;
  }

  fs.mkdirSync(folder, { recursive: true });

  fs.writeFileSync(cssFile, `/* ${className}.css */\n.${className} {\n  \n}`, 'utf-8');
  fs.writeFileSync(jsFile, `// ${className}.js\ncrisp.${kebab} = {\n  init() {\n    console.log("${className} initialized");\n  }\n};`, 'utf-8');
  fs.writeFileSync(htmlFile, `<link rel="stylesheet" href="../../css/crisp.css">
<script src="../../js/crisp.js"></script>
<div class="${className}">
  <!-- preview content -->
</div>`, 'utf-8');

  console.log(`✅ Component "${kebab}" created in ${folder}`);
  rl.close();
});
