const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("Checking dependencies...");
try {
  require.resolve('sharp');
} catch (e) {
  console.log("Installing sharp to compress images...");
  execSync('npm install sharp --no-save', { stdio: 'inherit' });
}

const sharp = require('sharp');

async function processImages() {
  const publicDir = path.join(__dirname, 'public');
  const files = fs.readdirSync(publicDir).filter(f => f.match(/\.(png|jpg|jpeg)$/i));
  const converted = [];

  for (const file of files) {
    const filePath = path.join(publicDir, file);
    const stat = fs.statSync(filePath);
    
    // Convert files larger than 500KB
    if (stat.size > 500000) { 
      console.log(`Optimizing ${file} (${(stat.size/1024/1024).toFixed(2)} MB)...`);
      const ext = path.extname(file);
      const basename = path.basename(file, ext);
      const webpPath = path.join(publicDir, `${basename}.webp`);
      
      await sharp(filePath)
        .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(webpPath);
        
      fs.unlinkSync(filePath);
      converted.push({ from: file, to: `${basename}.webp` });
    }
  }

  console.log("Updating code references...");
  const replaceInDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        replaceInDir(fullPath);
      } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
        let content = fs.readFileSync(fullPath, 'utf-8');
        let modified = false;
        
        for (const conv of converted) {
          const regex = new RegExp(`/${conv.from}`, 'g');
          if (content.match(regex)) {
            content = content.replace(regex, `/${conv.to}`);
            modified = true;
          }
        }
        if (modified) {
          fs.writeFileSync(fullPath, content);
          console.log(`Updated ${path.basename(fullPath)}`);
        }
      }
    }
  };
  
  replaceInDir(path.join(__dirname, 'src'));
  console.log("Optimization complete! All heavy images are now lightweight WebP.");
}

processImages().catch(console.error);
