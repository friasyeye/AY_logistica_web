import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const assets = [
  // Team carousel photos
  { url: "https://framerusercontent.com/images/aTxLf9zgOsWJ3Evt2cYjqR4YUZc.jpeg", dest: "public/images/carousel-team-1.jpeg" },
  { url: "https://framerusercontent.com/images/93JXunVZObeJ6NEdLAe4q0rxgs.jpeg", dest: "public/images/carousel-team-2.jpeg" },
  { url: "https://framerusercontent.com/images/5TbmFVpYwJqGV1c9POFi3Kojt4.jpg", dest: "public/images/carousel-team-3.jpg" },
  { url: "https://framerusercontent.com/images/xaJMhmSZhjZUOToMYN2qIbyWM.jpeg", dest: "public/images/avatar-james-holloway.jpeg" },
  // Icons/logos
  { url: "https://framerusercontent.com/images/COCXAoQTrKVAsNp04m1ytaBH5WY.png", dest: "public/images/supporters-logo-1.png" },
  { url: "https://framerusercontent.com/images/3O2UuGW0PRFNrkY7PYX4K623c.png", dest: "public/images/supporters-logo-2.png" },
  { url: "https://framerusercontent.com/images/oqKM5huSoTF9jzeNFl3c3NvpIJg.png", dest: "public/images/supporters-logo-3.png" },
  { url: "https://framerusercontent.com/images/VQjluMNywKhZ8T1UbafuyggOpg.png", dest: "public/images/supporters-logo-4.png" },
  { url: "https://framerusercontent.com/images/zvMr91OLhrmc3rchuckjIga5sG8.png", dest: "public/images/supporters-logo-5.png" },
  { url: "https://framerusercontent.com/images/g80p7A982TMTh5eRc8Rb3fk2PQ.png", dest: "public/images/supporters-logo-6.png" },
  // Favicons
  { url: "https://framerusercontent.com/images/Z4OlV7hWfO8yIbxmFvYFYNZTrs.png", dest: "public/seo/favicon.png" },
];

mkdirSync("public/images", { recursive: true });
mkdirSync("public/seo", { recursive: true });

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
  console.log(`✓ ${dest}`);
}

// Download in batches of 4
for (let i = 0; i < assets.length; i += 4) {
  const batch = assets.slice(i, i + 4);
  await Promise.allSettled(batch.map(({ url, dest }) => download(url, dest).catch(e => console.error(`✗ ${dest}: ${e.message}`))));
}

console.log("Done!");
