const fs = require('fs');

const pages = [
  {
    path: 'src/app/jardin/page.tsx',
    title: 'Jardín | COLBREW™ - Café Especial Colombiano',
    description: 'Descubre el café especial de Jardín, Antioquia. Un territorio donde la tradición cafetera se encuentra con la preservación del patrimonio y la cultura.'
  },
  {
    path: 'src/app/apia/page.tsx',
    title: 'Apía | COLBREW™ - Territorio, Música y Futuro',
    description: 'Conoce nuestro café de Apía, Risaralda. Una comunidad unida por el amor a la tierra, el café de altura y las escuelas de música.'
  },
  {
    path: 'src/app/ciudad-bolivar/page.tsx',
    title: 'Ciudad Bolívar | COLBREW™ - Corazón Cafetero',
    description: 'Explora Ciudad Bolívar, en el Suroeste Antioqueño. Familias productoras, montañas cafeteras y un compromiso firme con el progreso de las nuevas generaciones.'
  },
  {
    path: 'src/app/comunidad/page.tsx',
    title: 'Comunidad y Territorio | COLBREW™',
    description: 'Más allá de una taza de café, COLBREW apoya iniciativas educativas, culturales y musicales en las regiones productoras de Colombia.'
  },
  {
    path: 'src/app/nuestro-origen/page.tsx',
    title: 'Nuestro Origen | La Historia de COLBREW™',
    description: 'Conoce la historia detrás de COLBREW, cómo nace nuestro compromiso social y por qué elegimos los mejores cafés de especialidad de Colombia.'
  },
  {
    path: 'src/app/historias/page.tsx',
    title: 'Historias | COLBREW™',
    description: 'Lee las historias de las familias caficultoras, los músicos jóvenes y el impacto real que construimos juntos en Colombia.'
  }
];

for (const page of pages) {
  if (!fs.existsSync(page.path)) continue;
  let content = fs.readFileSync(page.path, 'utf8');

  // Remove "use client";
  content = content.replace(/"use client";\n?/g, '');
  content = content.replace(/'use client';\n?/g, '');

  // Add Metadata export if not exists
  if (!content.includes('export const metadata')) {
    const metadataCode = `import { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: "${page.title}",\n  description: "${page.description}",\n};\n\n`;
    
    // Insert after the last import
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfImport + 1) + '\n' + metadataCode + content.slice(endOfImport + 1);
    } else {
      content = metadataCode + content;
    }
  }

  fs.writeFileSync(page.path, content);
}

console.log('Metadata injected successfully!');
