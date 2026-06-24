const fs = require('fs');

const files = [
  'src/app/jardin/page.tsx',
  'src/app/apia/page.tsx',
  'src/app/ciudad-bolivar/page.tsx',
  'src/app/comunidad/page.tsx',
  'src/app/nuestro-origen/page.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('import Image from "next/image"')) {
    content = content.replace(
      'import { TopNavBar } from "@/components/TopNavBar";',
      'import { TopNavBar } from "@/components/TopNavBar";\nimport Image from "next/image";'
    );
  }

  // Replace standard cover images
  content = content.replace(/<img\s*src="([^"]+)"\s*alt="([^"]+)"\s*className="([^"]+)"\s*\/>/g, (match, src, alt, className) => {
    // For map images
    if (src.includes('mapa-')) {
      return `<Image src="${src}" alt="${alt}" width={800} height={800} className="${className}" />`;
    }
    
    // For hero and full-width images, we need fill
    // Clean up redundant positioning classes
    let cleanClass = className.replace('absolute inset-0 ', '').replace('w-full h-full ', '').trim();
    if (cleanClass === '') cleanClass = 'object-cover';
    
    return `<Image src="${src}" alt="${alt}" fill className="${cleanClass}" />`;
  });

  // Specifically fix the container for the second image (Section 2)
  // It needs `relative` added to the wrapper div
  content = content.replace(
    /<div className="w-full h-\[400px\] md:h-full min-h-\[500px\] rounded-sm overflow-hidden">/g,
    '<div className="relative w-full h-[400px] md:h-full min-h-[500px] rounded-sm overflow-hidden">'
  );

  fs.writeFileSync(file, content);
}
console.log('Images optimized in territory pages!');
