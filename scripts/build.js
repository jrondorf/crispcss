const fs = require('fs');
const path = require('path');
const cleanCSS = require('clean-css');
const esbuild = require('esbuild');

// Paths
const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

// CSS files
const cssFiles = [
    'core/reset.css',
    'components/accordion.css',
    'components/button.css',
    'components/card.css',
    'components/columns.css',
    'components/darkmode.css',
    'components/forms.css',
    'components/modal.css',
    'components/navbar.css',
    'components/responsive.css',
    'components/tabs.css',
    'components/toast.css',
    'components/typography.css',
    'components/table.css',
    'components/utilities.css',
];

// Combine CSS
const combineCSS = () => {
    const combinedCSS = cssFiles.map(file => fs.readFileSync(path.join(srcDir, file), 'utf8')).join('\n');
    fs.writeFileSync(path.join(distDir, 'crisp.css'), combinedCSS);
    
    // Minify CSS
    const minifiedCSS = new cleanCSS().minify(combinedCSS).styles;
    fs.writeFileSync(path.join(distDir, 'crisp.min.css'), minifiedCSS);
};

// JavaScript files (if any)
const jsFiles = [];

// Combine JavaScript
const combineJS = async () => {
    await esbuild.build({
        entryPoints: ['src/js/index.js'],
        bundle: true,
        outfile: 'dist/crisp.js',
        minify: false,
        sourcemap: true,
    });
    await esbuild.build({
        entryPoints: ['src/js/index.js'],
        bundle: true,
        outfile: 'dist/crisp.min.js',
        minify: true,
        sourcemap: false,
    });
};

// Build process
const build = async () => {
    combineCSS();
    await combineJS();
};

// Run build
build().catch(err => console.error(err));