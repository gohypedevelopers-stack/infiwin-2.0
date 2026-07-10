const pdfToImage = require('@semantik/pdf2image').default || require('@semantik/pdf2image');
const path = require('path');
const fs = require('fs');

async function extract() {
  const pdfFile = 'public/gallery/Systems/Telescopic Sliders.pdf';
  const outDir = 'public/gallery/Systems/Telescopic Sliders';

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  try {
    const images = await pdfToImage(pdfFile, {
      outdir: outDir,
      format: 'jpeg',
      prefix: 'page'
    });
    console.log('Extracted:', images);
  } catch(e) {
    console.error(e);
  }
}

extract();
