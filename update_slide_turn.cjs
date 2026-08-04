const fs = require('fs');
const path = require('path');

const files = [
  "src/pages/TermsAndConditions.tsx",
  "src/pages/FAQ.tsx",
  "src/pages/About.tsx",
  "src/data/productData.ts",
  "src/components/home/FAQSection.tsx",
  "src/components/home/FrameColorSection.tsx",
  "src/components/home/LeadFormSection.tsx",
  "src/components/home/ProductFeatureSection.tsx",
  "src/components/home/ReviewsSection.tsx",
  "src/components/home/TestimonialsSection.tsx",
  "src/components/home/ProductsGridSection.tsx",
  "src/components/home/HeroSection.tsx",
  "src/components/home/BestSellerSection.tsx",
  "src/components/layout/Footer.tsx",
  "src/components/home/BenefitsSection.tsx",
  "index.html",
  "src/pages/Applications.tsx"
];

for (const file of files) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace 'Slide & Turn' with 'Slide & Turn®' but avoid breaking URLs.
    // Negative lookbehind or lookahead for ".jpg", ".jpeg", ".png", "gallery" isn't fully reliable with regex if we don't know the exact format.
    // Instead, we just replace all "Slide & Turn" and then revert the ones inside URLs.
    
    // Replace all Slide & Turn without ®
    let newContent = content.replace(/Slide & Turn(?!®)/g, 'Slide & Turn®');
    
    // Revert URLs and file paths
    newContent = newContent.replace(/Slide%20&%20Turn®/g, 'Slide%20&%20Turn');
    newContent = newContent.replace(/Slide & Turn® \(/g, 'Slide & Turn (');
    newContent = newContent.replace(/Slide & Turn®\.jpg/g, 'Slide & Turn.jpg');
    newContent = newContent.replace(/Slide-turn®/gi, 'slide-turn');
    newContent = newContent.replace(/slide-turn®/gi, 'slide-turn');

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
}
