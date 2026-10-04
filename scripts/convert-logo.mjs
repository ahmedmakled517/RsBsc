import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputPath = path.resolve('public/logo.jpeg');
const publicWebp = path.resolve('public/logo.webp');
const assetsWebp = path.resolve('public/assets/logo.webp');
const faviconPng = path.resolve('public/icon.png');
const appleIcon = path.resolve('public/apple-icon.png');

async function convert() {
  console.log('Converting logo to WebP...');
  await sharp(inputPath)
    .webp({ quality: 90 })
    .toFile(publicWebp);

  await sharp(inputPath)
    .webp({ quality: 90 })
    .toFile(assetsWebp);

  // Generate a sharp, clean favicon/app icon (512x512 and 192x192)
  await sharp(inputPath)
    .resize(512, 512)
    .png()
    .toFile(faviconPng);

  await sharp(inputPath)
    .resize(180, 180)
    .png()
    .toFile(appleIcon);

  console.log('Conversion complete!');
  const stats = fs.statSync(publicWebp);
  console.log('WebP file size:', (stats.size / 1024).toFixed(2), 'KB');
}

convert().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});
