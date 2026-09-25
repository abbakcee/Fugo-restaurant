import { MenuItem, GalleryItem, ExperiencePillar } from '../types';

export const RESTAURANT_INFO = {
  name: 'Fugo Bar & Restaurant',
  shortName: 'Fugo',
  tagline: 'Where Great Food Meets Great Vibes.',
  subTagline:
    'A stylish dining and lounge experience in Accra, made for memorable meals, smooth drinks and late-night energy.',
  phone: '053 330 6391',
  phoneDial: 'tel:0533306391',
  phoneInternational: '+233 53 330 6391',
  whatsappUrl:
    'https://wa.me/233533306391?text=Hello%20Fugo%20Bar%20%26%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation.',
  address: '14 Jungle Road, 1st Christian Centre Link',
  city: 'Accra',
  country: 'Ghana',
  fullAddress: '14 Jungle Road, 1st Christian Centre Link, Accra, Ghana',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=14+Jungle+Road+1st+Christian+Centre+Link+Accra+Ghana',
  instagramHandle: '@fugobarandrestaurant',
  instagramUrl: 'https://instagram.com/fugobarandrestaurant',
  hours: '08:00 – 02:00 Daily',
  hoursDetail: 'Monday to Sunday · 8:00 AM – 2:00 AM',
  conceptCreator: 'K-9',
};

export const IMAGES = {
  hero: '/src/assets/images/fugo_hero_lounge_1790342872029.jpg',
  cocktail: '/src/assets/images/fugo_cocktail_bar_1790342884810.jpg',
  plating: '/src/assets/images/fugo_gourmet_plating_1790342897911.jpg',
  lounge: '/src/assets/images/fugo_lounge_interior_1790342915439.jpg',
  social: '/src/assets/images/fugo_social_evening_1790342926915.jpg',
};

export const SAMPLE_MENU: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Charred Suya Spiced Calamari',
    category: 'starters',
    description: 'Crisp calamari tossed in house aromatic suya spice, lime crema, pickled red shallots',
    priceNote: 'Sample Starter Preview',
    tags: ['Signature', 'Gluten-Friendly'],
    signature: true,
  },
  {
    id: 's2',
    name: 'Truffle & Herb Grilled Tiger Prawns',
    category: 'starters',
    description: 'Jumbo prawns basted with roasted garlic herb butter, smoked sea salt, toasted brioche points',
    priceNote: 'Sample Starter Preview',
    tags: ['Seafood', 'Chef Special'],
  },
  {
    id: 's3',
    name: 'Plantain Croquettes & Pepper Chutney',
    category: 'starters',
    description: 'Crisp golden sweet plantain croquettes, whipped goat curd, smoky habanero-tomato relish',
    priceNote: 'Sample Starter Preview',
    tags: ['Vegetarian', 'Local Touch'],
  },
  {
    id: 's4',
    name: 'Glazed Pork Belly Bites',
    category: 'starters',
    description: 'Slow-braised pork belly, ginger tamarind reduction, sesame seed crunch, fresh micro coriander',
    priceNote: 'Sample Starter Preview',
    tags: ['Small Plate'],
  },

  // Mains
  {
    id: 'm1',
    name: 'Prime Grilled Ribeye & Peppercorn Glaze',
    category: 'mains',
    description: 'Charbroiled aged ribeye steak, crushed green peppercorn jus, roasted bone marrow butter, crispy herb potatoes',
    priceNote: 'Sample Main Preview',
    tags: ['Signature Grill', 'Prime Cut'],
    signature: true,
  },
  {
    id: 'm2',
    name: 'Pan-Seared Atlantic Seabass',
    category: 'mains',
    description: 'Crispy skin sea bass fillet, saffron infused coconut reduction, buttered asparagus, charred sweet lemon',
    priceNote: 'Sample Main Preview',
    tags: ['Seafood', 'Gluten-Free'],
  },
  {
    id: 'm3',
    name: 'Fugo Signature Jollof Risotto',
    category: 'mains',
    description: 'Arborio rice cooked in rich spiced tomato reduction, confit cherry tomatoes, smoked chicken or wild mushrooms, parmesan crisp',
    priceNote: 'Sample Main Preview',
    tags: ['Fusion Favorite', 'Signature'],
    signature: true,
  },
  {
    id: 'm4',
    name: 'Slow-Braised Lamb Shank',
    category: 'mains',
    description: 'Fall-off-the-bone lamb shanks with aromatic rosemary red wine jus, velvety yam puree',
    priceNote: 'Sample Main Preview',
    tags: ['Comfort Classics'],
  },

  // Cocktails
  {
    id: 'c1',
    name: 'Jungle Road Smoked Old Fashioned',
    category: 'cocktails',
    description: 'Aged bourbon, house spiced brown sugar syrup, Angostura & orange bitters, smoked with Ghana cedar bark',
    priceNote: 'Sample Cocktail Preview',
    tags: ['Signature Drink', 'Smoked'],
    signature: true,
  },
  {
    id: 'c2',
    name: 'Fugo Hibiscus Velvet Fizz',
    category: 'cocktails',
    description: 'Artisanal gin, steeped wild sobolo hibiscus infusion, fresh lime, prosecco float, edible gold leaf',
    priceNote: 'Sample Cocktail Preview',
    tags: ['Vibrant & Crisp'],
    signature: true,
  },
  {
    id: 'c3',
    name: 'Passion & Chili Mezcalita',
    category: 'cocktails',
    description: 'Smoky artisanal mezcal, freshly squeezed passionfruit nectar, lime, agave, Tajín-salt rim',
    priceNote: 'Sample Cocktail Preview',
    tags: ['Tropical Heat'],
  },
  {
    id: 'c4',
    name: 'Midnight Espresso Martini',
    category: 'cocktails',
    description: 'Vodka, dark coffee liqueur, fresh cold-brew espresso extraction, vanilla bean foam, shaved cacao',
    priceNote: 'Sample Cocktail Preview',
    tags: ['Nightlife Favorite'],
  },

  // Desserts
  {
    id: 'd1',
    name: 'Warm Dark Chocolate Fondant',
    category: 'desserts',
    description: 'Molten centre 70% dark Ghanaian cocoa cake, Madagascan vanilla gelato, salted caramel drizzle',
    priceNote: 'Sample Dessert Preview',
    tags: ['Decadent', 'Signature'],
    signature: true,
  },
  {
    id: 'd2',
    name: 'Caramelized Spiced Plantain Tart',
    category: 'desserts',
    description: 'Flaky puff pastry, cinnamon caramelized ripe plantain, coconut cream quenelle',
    priceNote: 'Sample Dessert Preview',
    tags: ['Artisanal Pastry'],
  },
  {
    id: 'd3',
    name: 'Passionfruit & White Chocolate Mousse',
    category: 'desserts',
    description: 'Silky velvet mousse, tart passionfruit coulis, toasted pistachio crumble',
    priceNote: 'Sample Dessert Preview',
    tags: ['Light & Refreshing'],
  },
];

export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    number: '01',
    title: 'Social Dining',
    subtitle: 'Flavors meant to be shared',
    description:
      'From elevated small plates to generous prime cuts, dishes are crafted for lingering conversations and shared tables with close friends.',
    image: IMAGES.plating,
  },
  {
    number: '02',
    title: 'Lounge Atmosphere',
    subtitle: 'Warm lighting, lush seating',
    description:
      'Curated ambient lighting, rich velvet textures, and an urban soundtrack create an intimate yet energetic hospitality backdrop.',
    image: IMAGES.lounge,
  },
  {
    number: '03',
    title: 'Date-Night Energy',
    subtitle: 'Intimacy meets style',
    description:
      'Subtle candlelit nooks, attentive service, and bespoke cocktails that set the tone for special evenings and romantic escapes in Accra.',
    image: IMAGES.cocktail,
  },
  {
    number: '04',
    title: 'Late-Night Flow',
    subtitle: 'Open until 02:00 every night',
    description:
      'Whether starting with dinner or arriving for late-night cocktails, Fugo flows seamlessly from sunset dining into late-night social energy.',
    image: IMAGES.social,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Architectural Lounge Seating',
    category: 'ambiance',
    image: IMAGES.lounge,
    aspect: 'aspect-[4/3]',
    caption: 'Curved velvet banquettes and warm ambient pendant lighting',
  },
  {
    id: 'g2',
    title: 'Signature Smoked Old Fashioned',
    category: 'cocktails',
    image: IMAGES.cocktail,
    aspect: 'aspect-[4/3]',
    caption: 'Handcrafted craft cocktails on polished granite with gold brass accents',
  },
  {
    id: 'g3',
    title: 'Artisanal Plated Culinary Concept',
    category: 'cuisine',
    image: IMAGES.plating,
    aspect: 'aspect-[4/3]',
    caption: 'Gourmet tenderloin & tiger prawns with microgreens on charcoal ceramic',
  },
  {
    id: 'g4',
    title: 'The Central Bar & Evening Glow',
    category: 'ambiance',
    image: IMAGES.hero,
    aspect: 'aspect-[16/9]',
    caption: 'A glowing spirits backdrop and sleek marble counters at twilight',
  },
  {
    id: 'g5',
    title: 'Social Gatherings & Late Night Energy',
    category: 'lounge',
    image: IMAGES.social,
    aspect: 'aspect-[4/3]',
    caption: 'Memorable toasts and shared plates with friends in Accra',
  },
];
