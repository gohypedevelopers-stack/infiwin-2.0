const fs = require('fs');
const { createCanvas } = require('canvas');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extractImages() {
  const pdfPath = 'public/gallery/Systems/Top Hang Bi Fold.pdf';
  const outDir = 'public/gallery/Systems/Top Hang Bi Fold';
  
  if (!fs.existsSync(outDir)){
      fs.mkdirSync(outDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({data});
  const doc = await loadingTask.promise;
  const numPages = doc.numPages;
  console.log(`Total pages: ${numPages}`);
  
  const limit = Math.min(6, numPages);
  for (let i = 1; i <= limit; i++) {
    const page = await doc.getPage(i);
    // Use scale 6.0 for extreme high-res to prevent any jagged aliasing ("zzz" figures)
    const viewport = page.getViewport({ scale: 6.0 });
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');
    
    // Antialiasing is default in canvas, but ensuring no text watermarks
    context.fillText = function() {};
    context.strokeText = function() {};
    // Ensure smoothing is on for best scaling quality
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    
    await page.render({ canvasContext: context, viewport: viewport }).promise;
    
    const outFileName = `${outDir}/image_highres_${i}.png`;
    const out = fs.createWriteStream(outFileName);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    
    await new Promise((resolve) => {
        out.on('finish', () => {
            console.log(`Page ${i} rendered and saved to ${outFileName}`);
            resolve();
        });
    });
  }
}

extractImages().catch(console.error);
