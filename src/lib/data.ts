import type { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'ue-ts-001',
    name: 'Cybernetic Dreams Tee',
    price: 35.0,
    originalPrice: 45.0,
    rating: 4.8,
    reviewCount: 124,
    tags: ['featured', 'graphic', 'new'],
    description:
      'A glimpse into a neon-soaked future. This 100% heavyweight cotton tee features a stunning cybernetic graphic, perfect for making a statement in the urban jungle.',
    details: [
      '240 GSM Heavyweight 100% Cotton',
      'Oversized Fit',
      'High-Density Screen Print',
      'Bio-Washed for a soft feel',
    ],
    imageIds: ['product-1-front', 'product-1-back', 'product-1-detail'],
    colors: [
      { name: 'Onyx Black', class: 'bg-black' },
      { name: 'Midnight Blue', class: 'bg-blue-900' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'ue-ts-002',
    name: 'Minimalist Edge Tee',
    price: 29.0,
    rating: 4.9,
    reviewCount: 210,
    tags: ['bestseller', 'minimalist'],
    description:
      "Simplicity is the ultimate sophistication. Our Minimalist Edge Tee features a subtle embroidered 'Urban Edge' logo on premium combed cotton. Versatile and timeless.",
    details: [
      '180 GSM Combed Cotton',
      'Regular Fit',
      'Embroidered Logo',
      'Pre-Shrunk',
    ],
    imageIds: ['product-2-front', 'product-2-back', 'product-2-detail'],
    colors: [
      { name: 'Chalk White', class: 'bg-white' },
      { name: 'Asphalt Grey', class: 'bg-gray-700' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'ue-ts-003',
    name: 'Glitch Runner Tee',
    price: 38.0,
    rating: 4.7,
    reviewCount: 89,
    tags: ['graphic', 'abstract'],
    description:
      'Embrace the chaos. The Glitch Runner tee showcases a dynamic, abstract design that captures the speed and energy of the city. Made with ultra-soft fabric for all-day comfort.',
    details: [
      '200 GSM Cotton-Poly Blend',
      'Regular Fit',
      'Digital & Screen Print Mix',
      'Tagless Neck Label',
    ],
    imageIds: ['product-3-front'],
    colors: [{ name: 'Charcoal', class: 'bg-gray-800' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'ue-ts-004',
    name: 'Metro Voyager Tee',
    price: 32.0,
    rating: 4.6,
    reviewCount: 150,
    tags: ['graphic', 'city'],
    description:
      'Wear the city skyline. This tee features a stylized graphic of an urban landscape, perfect for the modern explorer.',
    details: [
      '190 GSM 100% Cotton',
      'Regular Fit',
      'Soft-Hand Screen Print',
      'Ribbed Collar',
    ],
    imageIds: ['product-4-front'],
    colors: [
      { name: 'Electric Blue', class: 'bg-sky-500' },
      { name: 'Onyx Black', class: 'bg-black' },
    ],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 'ue-ts-005',
    name: 'Code Breaker Tee',
    price: 40.0,
    rating: 4.8,
    reviewCount: 95,
    tags: ['featured', 'oversized'],
    description:
      "An oversized statement piece with cryptic Japanese characters and digital motifs. For those who speak the language of the future.",
    details: [
      '260 GSM French Terry Cotton',
      'Drop-Shoulder Oversized Fit',
      'Puff and Screen Print',
      'Woven Hem Label',
    ],
    imageIds: ['product-5-front'],
    colors: [{ name: 'Deep Black', class: 'bg-black' }],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 'ue-ts-006',
    name: 'Aura Dye Tee',
    price: 36.0,
    rating: 4.5,
    reviewCount: 77,
    tags: ['tiedye'],
    description:
      "Each tee is a unique work of art. The Aura Dye Tee is individually dyed for a one-of-a-kind pattern that radiates energy.",
    details: [
      '200 GSM 100% Cotton',
      'Relaxed Fit',
      'Custom Tie-Dye Process',
      'Each piece is unique',
    ],
    imageIds: ['product-6-front'],
    colors: [{ name: 'Nebula', class: 'bg-purple-500' }],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'ue-ts-007',
    name: 'Vintage Noir Tee',
    price: 34.0,
    rating: 4.9,
    reviewCount: 180,
    tags: ['bestseller', 'vintage'],
    description:
      'A perfectly worn-in feel from day one. Our Vintage Noir Tee is pigment-dyed and washed for a faded, retro look that feels incredibly soft.',
    details: [
      '210 GSM 100% Cotton',
      'Slightly Oversized Fit',
      'Pigment-Dyed for vintage look',
      'Reinforced Shoulder Seams',
    ],
    imageIds: ['product-7-front'],
    colors: [{ name: 'Faded Black', class: 'bg-gray-800' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'ue-ts-008',
    name: 'Sleeve Strike L/S Tee',
    price: 45.0,
    rating: 4.7,
    reviewCount: 65,
    tags: ['longsleeve'],
    description:
      'A long-sleeve essential with printed graphics down both sleeves. Perfect for layering or as a standalone piece in cooler weather.',
    details: [
      '220 GSM 100% Cotton',
      'Regular Fit',
      'Screen Printed Sleeves',
      'Cuffed Wrists',
    ],
    imageIds: ['product-8-front'],
    colors: [
      { name: 'Onyx Black', class: 'bg-black' },
      { name: 'Chalk White', class: 'bg-white' },
    ],
    sizes: ['M', 'L', 'XL'],
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-001',
    productId: 'ue-ts-001',
    name: 'Jay',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
    rating: 5,
    comment:
      "The quality is insane! Heavyweight cotton feels super premium. The print is sharp and vibrant. Definitely my new favorite tee.",
    createdAt: new Date('2023-10-20T14:48:00.000Z'),
  },
  {
    id: 'rev-002',
    productId: 'ue-ts-002',
    name: 'Maya',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
    rating: 5,
    comment:
      'So clean and versatile. The embroidery is subtle but adds that touch of class. Goes with everything in my wardrobe.',
    createdAt: new Date('2023-10-18T10:22:00.000Z'),
  },
  {
    id: 'rev-003',
    productId: 'ue-ts-001',
    name: 'Alex R.',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
    rating: 4,
    comment:
      "Love the oversized fit and the design. Wish it came in more colors though! But overall, a solid 4/5.",
    createdAt: new Date('2023-10-15T21:05:00.000Z'),
  },
  {
    id: 'rev-004',
    productId: 'ue-ts-007',
    name: 'Chloe',
    avatarUrl: 'https://picsum.photos/seed/avatar4/100/100',
    rating: 5,
    comment:
      "This is the perfect vintage tee. It's so soft and has that authentic faded look without looking old. 10/10 recommend.",
    createdAt: new Date('2023-11-01T11:54:00.000Z'),
  },
];
