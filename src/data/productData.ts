import { galleryData } from "./galleryData";

export const getProductImg = (title: string, fallbackImg: string) => {
  const id = title.toLowerCase().replace(/[\s&.]+/g, '-');
  if (galleryData[id] && galleryData[id].images.length > 0) {
    return galleryData[id].images[0];
  }
  return fallbackImg;
};

export const productsList = [
  { title: "Slide & Turn", category: "Balcony System", img: getProductImg("Slide & Turn", "/slide_turn_banner.png") },
  { title: "Guillotine Glass System", category: "Balcony System", img: galleryData["guillotine-glass-system"]?.images[0] || "/guillotine_banner.jpg" },
  { title: "Telescopic Sliders", category: "Internal Partition", img: getProductImg("Telescopic Sliders", "/telescopic_banner.jpg") },
  { title: "Synchronized Systems", category: "Internal Partition", img: getProductImg("Synchronized Systems", "/synchronized_banner.jpg") },
  { title: "Top Hang Bi Fold", category: "Internal Partition", img: getProductImg("Top Hang Bi Fold", "/tophang_banner.jpg") },
  { title: "Sliding Windows & Doors", category: "Doors & Windows", img: getProductImg("Sliding Windows & Doors", "/sliding_windows_banner.jpg") },
  { title: "Openable Windows & Doors", category: "Doors & Windows", img: getProductImg("Openable Windows & Doors", "/openable_banner.jpg") },
  { title: "Foldable Doors (Bi Fold)", category: "Doors & Windows", img: getProductImg("Foldable Doors (Bi Fold)", "/bifold_banner.jpg") },
  { title: "90 Degree Encloser", category: "Bathroom", img: getProductImg("90 Degree Encloser", "/ninety_degree_banner.jpg") },
  { title: "Sliding Encloser", category: "Bathroom", img: getProductImg("Sliding Encloser", "/sliding_enclosure_banner.jpg") },
  { title: "Openable Door", category: "Bathroom", img: getProductImg("Openable Door", "/openable_door_banner.jpg") },
  { title: "Fixed Partition", category: "Bathroom", img: getProductImg("Fixed Partition", "/fixed_partition_banner.jpg") }
];
