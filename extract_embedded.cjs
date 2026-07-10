const { PDFDocument, PDFName, PDFDict, PDFStream } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function extract() {
  const pdfBytes = fs.readFileSync('public/gallery/Systems/Telescopic Sliders.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();
  // We need pages 1, 2, 4, 5, 6, 7 (1-indexed)
  const pagesToExtract = [1, 2, 4, 5, 6, 7];
  const outDir = 'public/gallery/Systems/Telescopic Sliders';

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (let i = 0; i < pagesToExtract.length; i++) {
    const pageNum = pagesToExtract[i];
    const page = pages[pageNum - 1]; // 0-indexed
    
    // Look at page resources for images
    const resources = page.node.Resources();
    if (!resources) continue;
    
    const xObject = resources.get(PDFName.of('XObject'));
    if (!xObject) continue;
    
    const dict = pdfDoc.context.lookup(xObject, PDFDict);
    if (!dict) continue;

    let imageIndex = 1;
    for (const key of dict.keys()) {
      const obj = pdfDoc.context.lookup(dict.get(key));
      if (obj instanceof PDFStream) {
        const subtype = obj.dict.get(PDFName.of('Subtype'));
        if (subtype === PDFName.of('Image')) {
          // Check for DCTDecode (JPEG)
          const filter = obj.dict.get(PDFName.of('Filter'));
          let isJpeg = false;
          if (filter === PDFName.of('DCTDecode') || 
             (filter && filter.array && filter.array.includes(PDFName.of('DCTDecode')))) {
            isJpeg = true;
          }
          
          if (isJpeg) {
            // Uncompressed bytes are the JPEG itself since the stream is not decoded by default when using getContents()
            // Wait, to get the raw stream bytes in pdf-lib (without decompression), we use the underlying PDFStream's uncompressed contents, which IS the JPEG. 
            // Wait, PDFStream.contents is the bytes read from the file.
            const bytes = obj.contents;
            const ext = 'jpg';
            const fileName = `page_${pageNum}_img_${imageIndex}.${ext}`;
            fs.writeFileSync(path.join(outDir, fileName), bytes);
            console.log(`Saved ${fileName}`);
            imageIndex++;
          } else {
             console.log(`Page ${pageNum} has an image but it's not a JPEG, skipping.`);
          }
        }
      }
    }
  }
}

extract().catch(console.error);
