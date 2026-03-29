export type Question = {
  teamName: string
  clues: [string, string, string]
  dish: string
  ethnicity: string
  description: string
  /** Path under `public/` (e.g. `/neer-dosa.webp`) */
  image: string
}

/** 14 rounds: 7 “Thali Trail” teams + 7 additional themed rounds — clues/answers aligned to host script */
export const QUESTIONS: Question[] = [
  {
    teamName: 'Team 1: The Coastal Delicacy',
    clues: [
      'I am a thin, lace-like crepe made of rice and coconut milk.',
      'My name is based on a liquid',
      'I am a staple of the Tuluva community, often served with Chicken Curry.',
    ],
    dish: 'Neer Dosa',
    ethnicity: 'Tulu',
    description:
      'Lacy rice-and-coconut-milk dosas from the coast—light, tangy, and inseparable from Tuluva tables.',
    image: '/neer-dosa.webp',
  },
  {
    teamName: 'Team 2: The Warrior’s Feast',
    clues: [
      'I am a spicy, dark pork curry prepared with a unique tart vinegar called Kachampuli.',
      'I am the "Signature Dish" of the coffee-growing hills in South Karnataka.',
      'I am essential at every Kodava wedding or festival.',
    ],
    dish: 'Pandi / Handi Curry',
    ethnicity: 'Kodava',
    description:
      'Kodagu’s iconic pork curry—dark, aromatic, and sharpened with kachampuli at weddings and feasts.',
    image: '/Pandi-Curry.jpg',
  },
  {
    teamName: 'Team 3: The Nomadic Spice',
    clues: [
      'I am a spicy snack made of deep-fried chili, usually sold in the "Tandas" or settlements.',
      'My creators are known for their colorful mirror-work dresses.',
      'I represent the bold, fiery flavors of the Lambani kitchen.',
    ],
    dish: 'Lambani Mirchi Bajji',
    ethnicity: 'Lambani',
    description:
      'Crisp, stuffed chillies from Lambani settlements—street-spicy and full of mirror-work festival energy.',
    image: '/mirchi-bajji.jpg',
  },
  {
    teamName: 'Team 4: The Heart of the Hinterland',
    clues: [
      'I am a dense, steamed ball made from Finger Millet, eaten by swallowing, not chewing.',
      'I am the ultimate "Power Food" for farmers in the Old Mysore region.',
      'I am the most iconic staple of the Kannada rural community.',
    ],
    dish: 'Ragi Mudde',
    ethnicity: 'Kannada',
    description:
      'Finger-millet balls dipped in saaru—humble, filling, and central to Kannada rural meals.',
    image: '/ragi-mudde.webp',
  },
  {
    teamName: 'Team 5: The Marine Fusion',
    clues: [
      'I am a seasonal delicacy made by layering a spicy, tangy rice or gram-flour paste onto large, heart-shaped Colocasia (Taro) leaves.',
      'Once the leaves are coated, they are tightly rolled like a log, steamed, and then either sliced into rounds to be fried or crumbled into a "vunthi" (upma-style).',
      'I am a beloved monsoon specialty for the Konkani community (and Tuluvas), often served with a generous drizzle of fresh coconut oil.',
    ],
    dish: 'Pathrode',
    ethnicity: 'Konkani',
    description:
      'Colocasia leaves layered with spiced paste, rolled and steamed—coastal Konkani monsoon comfort.',
    image: '/patrode_recipe.jpg',
  },
  {
    teamName: 'Team 6: The Sweet Heritage',
    clues: [
      'I am a hard, fudge-like sweet made from gram flour, ghee, and sugar.',
      'I was first created in the royal kitchens of the Amba Vilas Palace.',
      'I am named after the city that hosts the state festival, Dasara.',
    ],
    dish: 'Mysore Pak',
    ethnicity: 'Kannada / Royal Mysuru',
    description:
      'Ghee-heavy gram-flour fudge from Mysuru’s palace kitchens—crumbly, golden, and festival-famous.',
    image: '/istockphoto-2192217521-612x612.jpg',
  },
  {
    teamName: 'Team 7: The Coastal Crunch',
    clues: [
      'I am a crispy, dry wafer made from rice, served with a spicy "Kori" (Chicken) gravy.',
      'Eating me involves crushing the wafer into the gravy to soak up the juices.',
      'I am the pride of the Tulu coastal belt.',
    ],
    dish: 'Kori Rotti',
    ethnicity: 'Tulu',
    description:
      'Crisp rice wafers shattered into kori saaru—textural, coastal, and unmistakably Tulu.',
    image: '/Kori-Rott-2-1024x1024.webp',
  },
  {
    teamName: 'The Ganesh Festival (Konkani)',
    clues: [
      'I am a delicious, deep-fried sweet "puff" or "empanada" filled with a mixture of coconut, jaggery, and cardamom.',
      'I am the star of the Chavath (Ganesh Chaturthi) festival for Konkani families.',
      'My name is Nevri, and I look like a half-moon.',
    ],
    dish: 'Nevri',
    ethnicity: 'Konkani',
    description:
      'Half-moon pastries of coconut and jaggery—crisp, festive, and central to Konkani Chavath.',
    image: '/nevri.webp',
  },
  {
    teamName: 'The Bayaluseeme Bread',
    clues: [
      'I am a flatbread made of Sorghum flour, usually hand-patted rather than rolled with a pin.',
      'I am famously served with "Enne Gai" (stuffed brinjal) and spicy peanut chutney.',
      'I am the staple diet of the North Karnataka (Bayaluseeme) region.',
    ],
    dish: 'Jolada Roti',
    ethnicity: 'Kannada (North Karnataka)',
    description:
      'Hand-patted jowar rotis with ennegayi and peanut chutney—the thali anchor of Bayaluseeme.',
    image: '/Jollada_Rotti_Oota_1.webp',
  },
  {
    teamName: 'The Nagarapanchami Leaf',
    clues: [
      'I am a sweet dumpling made by steaming rice batter inside a fragrant Turmeric leaf.',
      'I am specifically made during Nagarapanchami and have a very distinct aroma from the leaf.',
      'I am called Manjal Eradye in Tulu or Kotte Kadubu in Kannada.',
    ],
    dish: 'Turmeric Leaf Kadubu',
    ethnicity: 'Coastal Culture',
    description:
      'Rice batter steamed in turmeric leaves—aromatic, seasonal, and tied to Nagarapanchami.',
    image: '/patoli-011-768x1024.webp',
  },
  {
    teamName: 'Team 6: The Spicy Grain',
    clues: [
      'I am a spicy rice dish made specifically with a special variety of "small-grain" rice and a lot of vegetables.',
      'My name literally means "Hot Lentil Rice," and I am famous for being served with a dollop of ghee and "Boondi."',
      'I am a Sunday-lunch legend across Mysuru, Bengaluru, and beyond—one pot, many vegetables, endless ghee.',
    ],
    dish: 'Bisi Bele Bath',
    ethnicity: 'Kannada',
    description:
      'Small-grain rice with lentils, vegetables, and spice paste—ghee, boondi, and comfort in a bowl.',
    image: '/bisi-bele-baat.jpg',
  },
  {
    teamName: 'Team 1: The Giant Fruit (Tuluva Seasonal)',
    clues: [
      'I am a seasonal fruit known for my strong, sweet aroma that can fill an entire house when I am ripe.',
      'My flesh is used to make a special steamed cake called Pelakai Gatti (or Gidde), wrapped in teak or banana leaves.',
      'In Tulu I am Pelakai—jackfruit in every form from gatti and chips to curries when the season turns.',
    ],
    dish: 'Jackfruit (Pelakai)',
    ethnicity: 'Tuluva',
    description:
      'Pelakai jackfruit—perfumed, versatile, and steamed into gatti in Tuluva seasonal cooking.',
    image: '/144046950573GRQCt3Yo.jpeg',
  },
  {
    teamName: 'Team 5: The Spicy-Sour Mackerel',
    clues: [
      'I am a legendary fish curry that uses no coconut, relying entirely on the heat of red chilies and the sourness of tamarind.',
      'My name comes from the Tulu words for "Tamarind" (Puli) and "Chili" (Munchi).',
      'Bangude mackerel is my classic partner—served fiery red along the Karavali coast.',
    ],
    dish: 'Bangude Pulimunchi',
    ethnicity: 'Mangaluru Tulu / coastal',
    description:
      'Mackerel in a coconut-free pulimunchi—chili heat, tamarind tang, and coastal legend.',
    image: '/Bangude-PuliMunchi-03-1024x818.webp',
  },
  {
    teamName: 'Team 6: The Mangalore "Bun"',
    clues: [
      'I am a sweet, fluffy, deep-fried bread made from a fermented dough of maida and overripe bananas.',
      'I look like a thick puri but I am soft and sweet on the inside, usually served with spicy coconut chutney.',
      'Filter coffee and a Mangaluru tea stall wouldn’t feel complete without me.',
    ],
    dish: 'Mangalore Buns',
    ethnicity: 'Mangaluru / Udupi café culture',
    description:
      'Banana-fermented maida buns—puffed, sweet, and perfect with chutney and coffee.',
    image: '/buns.jpg',
  },
]
