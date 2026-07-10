const fs = require('fs');
const path = require('path');
const pdfjsLib = require('pdfjs-dist');
const { Canvas, createCanvas } = require('canvas');

// Some setups for pdfjs to work in Node
class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    return {
      canvas,
      context,
    };
  }
  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }
  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
}

async function extractPages() {
  const pdfPath = 'public/gallery/Systems/Telescopic Sliders.pdf';
  const outDir = 'public/gallery/Systems/Telescopic Sliders';
  const pagesToExtract = [1, 2, 4, 5, 6, 7];

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDocument = await loadingTask.promise;

  for (const pageNum of pagesToExtract) {
    const page = await pdfDocument.getPage(pageNum);
    const viewport = page.getViewport({ scale: 2.0 });

    const canvasFactory = new NodeCanvasFactory();
    const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);

    const renderContext = {
      canvasContext: canvasAndContext.context,
      viewport: viewport,
      canvasFactory: canvasFactory,
    };

    await page.render(renderContext).promise;

    const imgBuffer = canvasAndContext.canvas.toBuffer('image/png');
    const outPath = path.join(outDir, `page_${pageNum}.png`);
    fs.writeFileSync(outPath, imgBuffer);
    console.log(`Saved ${outPath}`);
  }
}

extractPages().catch(console.error);
