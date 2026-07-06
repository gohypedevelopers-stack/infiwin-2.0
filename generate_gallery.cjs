const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public/Website-20260518T071514Z-3-001/Website/Images');
const basePathForWeb = '/Website-20260518T071514Z-3-001/Website/Images';

const data = {
  "slide-turn": {
    title: "Slide & Turn",
    description: "Experience the ultimate freedom with our unobstructed frameless premium safety glazing barriers. Perfectly designed for balconies and terraces, offering panoramic views, superior weather protection, and effortless sliding mechanisms that redefine modern open-concept living spaces.",
    images: []
  },
  "commercial": {
    title: "Commercial",
    description: "Elevate your business environment with high durability storefront facades and versatile internal partition grids. Our commercial glass systems combine structural integrity with sophisticated aesthetics to create professional, light-filled, and highly secure commercial spaces.",
    images: []
  },
  "office-space": {
    title: "Office Space",
    description: "Transform your workplace with our acoustically isolated conference cubes and elegant manager cabins. Designed to foster productivity and collaboration, these glass partitions offer privacy without compromising on natural light or the open-office aesthetic you desire.",
    images: []
  },
  "farm-house": {
    title: "Farm House",
    description: "Seamlessly connect beautiful country landscaping with spacious interiors. Our farmhouse glass installations provide expansive, uninterrupted views of nature while maintaining excellent thermal efficiency, keeping your country home cozy and fully integrated with the outdoors.",
    images: []
  },
  "terrace": {
    title: "Terrace",
    description: "Convert open terraces into delightful, year-round glass lounges. Our weather-resistant enclosures protect against rain and wind while letting you enjoy the skyline. Enhance your rooftop or terrace into a luxurious, functional space for entertaining in any season.",
    images: []
  },
  "telescopic-sliders": {
    title: "Telescopic Sliders",
    description: "Create sleek separation zones for functional multi-use spaces. Telescopic sliding systems offer ultra-smooth operation and space-saving efficiency, effortlessly gliding away to merge rooms or sliding shut to create private enclosures in both residential and commercial settings.",
    images: []
  },
  "exterior": {
    title: "Exterior",
    description: "Built for resilience, our rigid wind resistance profile constructs are ideal for high-rise elevations. These exterior glass systems are engineered to withstand extreme weather conditions, ensuring maximum safety, acoustic insulation, and a striking, modern architectural facade.",
    images: []
  },
  "garden": {
    title: "Garden",
    description: "Enhance your outdoor living spaces with glass enclosures that blend beauty with functionality, perfect for garden houses, patios, and gazebos. Create a modern glass oasis that keeps you connected to your garden throughout the seasons.",
    images: [
      "/bifold_glass.png",
      "/roof.png",
      "/wind%20breaker.png",
      "/Website-20260518T071514Z-3-001/Website/Images/S&T/Farmhouse/WhatsApp%20Image%202021-02-20%20at%205.28.31%20PM.jpg",
      "/Website-20260518T071514Z-3-001/Website/Images/S&T/Farmhouse/FARMHOUSEHERO.jpg",
      "/Website-20260518T071514Z-3-001/Website/Images/S&T/Farmhouse/IMG_4395.jpg",
      "/Website-20260518T071514Z-3-001/Website/Images/S&T/Farmhouse/IMG_4402.jpg",
      "/Website-20260518T071514Z-3-001/Website/Images/S&T/Farmhouse/IMG_4403.jpg",
      "/Website-20260518T071514Z-3-001/Website/Images/S&T/Farmhouse/IMG_4408.jpg"
    ]
  },
  "90-degree-encloser": {
    title: "90 Degree Encloser",
    description: "Premium frameless 90-degree glass enclosures designed to elevate modern bathrooms. Features watertight performance, solid brass hardware, and custom configurations that make efficient use of corner space.",
    images: []
  },
  "foldable-doors-(bi-fold)": {
    title: "Foldable Doors (Bi Fold)",
    description: "Redefine boundaries with our luxurious bi-fold folding door systems. Offering elegant folding paths, high thermal performance, and expansive opening areas that bring the outdoors inside.",
    images: []
  },
  "openable-door": {
    title: "Openable Door",
    description: "Durable, high-performance openable door systems for modern bathrooms, offering complete watertightness, modern profiles, and smooth swing dynamics.",
    images: []
  },
  "openable-windows-doors": {
    title: "Openable Windows & Doors",
    description: "Premium openable swing windows and doors featuring superior acoustic insulation, complete weather proofing, and elegant modern profiles.",
    images: []
  },
  "sliding-encloser": {
    title: "Sliding Encloser",
    description: "Sophisticated sliding glass enclosure systems for modern bathrooms. Smooth-gliding sliding tracks, high durability hardware, and space-saving frameless glass panels.",
    images: []
  },
  "sliding-windows-doors": {
    title: "Sliding Windows & Doors",
    description: "Multi-track sliding windows and doors offering expansive views, premium hardware, and effortless gliding operation for large external openings.",
    images: []
  },
  "synchronized-systems": {
    title: "Synchronized Systems",
    description: "Synchronized multi-panel sliding systems for interior spaces. Quiet operation, sleek hardware, and automated-feeling movement that slides multiple panels simultaneously.",
    images: []
  },
  "top-hang-bi-fold": {
    title: "Top Hang Bi Fold",
    description: "Top-hung bi-fold systems for internal partition dividers. Keeps flooring unobstructed without bottom guide rails while providing flexible room dividing setups.",
    images: []
  },
  "balcony": {
    title: "Balcony",
    description: "Unobstructed frameless premium safety glazing barriers. Perfectly designed for balconies and terraces, offering panoramic views, superior weather protection, and effortless sliding mechanisms that redefine modern open-concept living spaces.",
    images: []
  },
  "int-partition": {
    title: "Interior Partition",
    description: "Sleek separation zones for functional multi-use spaces. Internal glass partitions offer privacy without compromising on natural light or open design aesthetics.",
    images: []
  },
  "guillotine-glass-system": {
    title: "Guillotine Glass System",
    description: "Experience modern automated vertical sliding glass systems. Designed for balconies and cafes, offering motorized operation, wind protection, and seamless integration.",
    images: []
  },
  "fixed-partition": {
    title: "Fixed Partition",
    description: "Elegant fixed glass partition systems for modern bathrooms and interiors, offering clean lines, structural stability, and minimalist aesthetics.",
    images: []
  }
};

function getImages(subpaths, key) {
  if (!Array.isArray(subpaths)) {
    subpaths = [subpaths];
  }

  subpaths.forEach(subpath => {
    const dirPath = path.join(baseDir, subpath);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpeg')) {
          // encodeURI handles spaces but leaves / and & intact, which is correct for Vite
          const rawPath = `${basePathForWeb}/${subpath}/${file}`.replace(/\\/g, '/');
          const encodedPath = encodeURI(rawPath);
          data[key].images.push(encodedPath);
        }
      });
    }
  });
}

function getImagesFromPublic(subdir, key) {
  let dirPath = path.join(__dirname, 'public', subdir, subdir);
  let webPathPrefix = `/${subdir}/${subdir}`;
  
  if (!fs.existsSync(dirPath)) {
    dirPath = path.join(__dirname, 'public', subdir);
    webPathPrefix = `/${subdir}`;
  }

  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpeg')) {
        const rawPath = `${webPathPrefix}/${file}`.replace(/\\/g, '/');
        const encodedPath = encodeURI(rawPath);
        data[key].images.push(encodedPath);
      }
    });
  }
}

// Map the keys exactly to what `toLowerCase().replace(/[\s&.]+/g, '-')` produces
getImages('S&T', 'slide-turn');
getImages(['S&T/JCB', 'S&T/Open Tap'], 'commercial');
getImages('Offics', 'office-space');
getImages('S&T/Farmhouse', 'farm-house');
getImages('Offics/Terrece', 'terrace');
getImages('Telescopic', 'telescopic-sliders');
getImages('S&T/Hotel Penensula', 'exterior');

getImagesFromPublic('90 Degree Encloser', '90-degree-encloser');
getImagesFromPublic('Foldable Doors (Bi Fold)', 'foldable-doors-(bi-fold)');
getImagesFromPublic('Openable Door (Bathroom)', 'openable-door');
getImagesFromPublic('Openable Windows & Doors', 'openable-windows-doors');
getImagesFromPublic('Sliding Encloser', 'sliding-encloser');
getImagesFromPublic('Sliding Windows & Doors', 'sliding-windows-doors');
getImagesFromPublic('Synchronized Systems', 'synchronized-systems');
getImagesFromPublic('Top Hang Bi Fold', 'top-hang-bi-fold');

getImages('S&T', 'balcony');
getImages('Telescopic', 'int-partition');
getImages('S&T', 'guillotine-glass-system');
getImagesFromPublic('Sliding Encloser', 'fixed-partition');

const tsContent = `export interface GalleryItem {
  title: string;
  description: string;
  images: string[];
}

export const galleryData: Record<string, GalleryItem> = ${JSON.stringify(data, null, 2)};
`;

const destDir = path.join(__dirname, 'src/data');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.writeFileSync(path.join(destDir, 'galleryData.ts'), tsContent);
console.log("Gallery data generated with updated mappings!");
