import sharp from 'sharp';
import fs from 'fs';

async function convertImage(inputPath, outputPath) {
  try {
    if (!fs.existsSync(inputPath)) {
      console.error(`File not found: ${inputPath}`);
      return;
    }
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Successfully converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

async function main() {
  await convertImage('public/guillotine_banner.jpg', 'public/guillotine_banner.webp');
  await convertImage('public/st_hero.png', 'public/st_hero.webp');
}

main();
