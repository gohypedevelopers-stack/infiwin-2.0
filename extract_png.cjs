const { pdfToPng } = require('pdf-to-png-converter');
const fs = require('fs');
const path = require('path');

async function extract() {
  try {
    const pdfPath = 'public/gallery/Systems/Telescopic Sliders.pdf';
    const outDir = 'public/gallery/Systems/Telescopic Sliders';

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const pngPages = await pdfToPng(pdfPath, {
      outputFolder: outDir,
      pagesToProcess: [1, 2, 4, 5, 6, 7]
    });
    console.log('Extracted:', pngPages.map(p => p.path));
  } catch (e) {
    console.error(e);
  }
}
extract();
