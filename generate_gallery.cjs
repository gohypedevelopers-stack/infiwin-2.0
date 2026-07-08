const fs = require('fs');
const path = require('path');

const targetGalleryDir = path.join(__dirname, 'public/gallery');

const folderNames = {
  "slide-turn": "Slide & Turn",
  "commercial": "Commercial",
  "office-space": "Office Space",
  "farm-house": "Farm House",
  "terrace": "Terrace",
  "telescopic-sliders": "Telescopic Sliders",
  "exterior": "Exterior",
  "garden": "Garden",
  "90-degree-encloser": "90 Degree Encloser",
  "foldable-doors-(bi-fold)": "Foldable Doors (Bi Fold)",
  "openable-door": "Openable Door",
  "openable-windows-doors": "Openable Windows & Doors",
  "sliding-encloser": "Sliding Encloser",
  "sliding-windows-doors": "Sliding Windows & Doors",
  "synchronized-systems": "Synchronized Systems",
  "top-hang-bi-fold": "Top Hang Bi Fold",
  "balcony": "Balcony",
  "int-partition": "Int. Partition",
  "guillotine-glass-system": "Guillotine Glass System",
  "fixed-partition": "Fixed Partition"
};

const applications = [
  "balcony",
  "int-partition",
  "commercial",
  "exterior",
  "terrace",
  "farm-house",
  "office-space",
  "garden"
];

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
    images: []
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

// Scan public/gallery/<subfolder>/<folderName> for each key to populate images dynamically
Object.keys(data).forEach(key => {
  const folderName = folderNames[key] || data[key].title;
  const isApp = applications.includes(key);
  const subfolder = isApp ? 'Applications' : 'Systems';
  const dirPath = path.join(targetGalleryDir, subfolder, folderName);
  
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    
    // Sort files to put banners/heroes first so they act as thumbnails/covers
    files.sort((a, b) => {
      const aLower = a.toLowerCase();
      const bLower = b.toLowerCase();
      const isABanner = aLower.includes('banner') || aLower.includes('hero');
      const isBBanner = bLower.includes('banner') || bLower.includes('hero');
      if (isABanner && !isBBanner) return -1;
      if (!isABanner && isBBanner) return 1;
      return a.localeCompare(b);
    });

    files.forEach(file => {
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpeg')) {
        // Construct the raw URL path and use encodeURI to preserve commas, ampersands, and parentheses
        const rawPath = `/gallery/${subfolder}/${folderName}/${file}`.replace(/\\/g, '/');
        const encodedPath = encodeURI(rawPath);
        data[key].images.push(encodedPath);
      }
    });
  }
});

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
console.log("Gallery data generated with updated mappings from Applications/ and Systems/ folders using encodeURI!");
