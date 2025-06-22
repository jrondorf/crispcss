import fs from 'fs';
import { exec } from 'child_process';

const watchDir = './components';

console.log('👀 Watching for changes...');
fs.watch(watchDir, { recursive: true }, (eventType, filename) => {
  if (filename.endsWith('.css') || filename.endsWith('.js')) {
    console.log(`🔄 Change detected in: ${filename}`);
    exec('npm run build', (err, stdout, stderr) => {
      if (err) return console.error(`❌ Build error: ${stderr}`);
      console.log(stdout);
    });
  }
});
