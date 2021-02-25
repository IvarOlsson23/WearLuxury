import { uuid } from 'vue-uuid'

// BRANDS
let brands = [
  'A.P.C.',
  'Acne Studios',
  'Adam Selman Sport',
  'Adidas',
  'Adidas by Stella McCartney',
  'Aeydē',
  'AG Jeans',
  'Agolde  coming soon',
  'Alaïa',
  'Alan Crocetti',
  'Alanui',
  'Alessandra Rich',
  'Alex Perry',
  'Alexander McQueen',
  'Alexandra Miro',
  'Alexandre Vauthier',
  'Alighieri',
  'Aliita',
  'Alo Yoga',
  'Altuzarra',
  'Ami Paris',
  'Amina Muaddi',
  'Ancient Greek Sandals',
  'Anissa Kermiche',
  'Ann Demeulemeester',
  'Anna Kosturova',
  'Aquazzura',
  'Asceno',
  'Asics',
  'Axel Arigato',
  'Balenciaga',
  'Balmain',
  'Barrie',
  'Blazé Milano',
  'Bogner',
  'Bottega Veneta',
  'Brock Collection',
  'Brunello Cucinelli',
  'Burberry',
  'By Far',
  'Camilla',
  'Canada Goose',
  'Carolina Herrera',
  'Caroline Constas',
  'Cartier Eyewear Collection',
  'Castañer',
  'Cecilie Bahnsen',
  'Celine Eyewear',
  'Chloé',
  'Christian Louboutin',
  'Christopher Esber',
  'Christopher Kane',
  "Church's",
  'Citizens of Humanity',
  'Clergerie',
  'Co',
  'Comme Des Garçons Wallet',
  'Common Leisure',
  'Common Projects',
  'Coperni',
  'Cordova',
  'Costarellos',
  'David Koma',
  'Deveaux New York',
  'Diane von Furstenberg',
  'Dior Eyewear',
  'Dodo Bar Or',
  'Dolce & Gabbana',
  'Dorothee Schumacher',
  'Dries Van Noten',
  'Dundas',
  'EÉRA',
  'Elhanati',
  'Elie Saab',
  'Elleme',
  'Emilia Wickstead',
  'Emilio Pucci',
  'Emilio Pucci Beach',
  'Erdem',
  'Eres',
  'Erin Snow',
  'Ernest Leoty',
  'Etro',
  'Extreme Cashmere',
  'Fendi',
  'Frame',
  'Frankie Shop',
  'Fusalp',
  'Gabriela Hearst',
  'Galvan',
  'Ganni',
  'Giambattista Valli',
  'Gianvito Rossi',
  'Givenchy',
  'Goldbergh',
  'Golden Goose',
  'Goldsign',
  'Grlfrnd',
  'Gucci',
  'Halpern',
  'Heidi Klein',
  'Helmut Lang',
  'Hogan',
  'Hunza G',
  'Inuikii',
  'Isabel Marant',
  'Isabel Marant, Étoile',
  'J Brand',
  'Jacquemus',
  'Jacquie Aiche',
  'Jade Swim',
  'Jardin des Orangers',
  'Jennifer Behr',
  'Jet Set',
  'Jil Sander',
  'Jimmy Choo',
  'Johanna Ortiz',
  'Jonathan Simkhai',
  'Joseph',
  'Juliet Dunn',
  'Junya Watanabe  coming soon',
  'JW Anderson',
  'Kalita',
  'Karla Colletto',
  'Khaite',
  'Lanston Sport',
  'Lee Mathews',
  'Legres',
  'Les Tien',
  'Lisa Marie Fernandez',
  'Live The Process',
  'Loewe',
  'Loro Piana',
  'LoveShackFancy',
  'Low classic',
  'Magda Butrym',
  'Maison Margiela',
  'Maison Michel',
  'Malone Souliers',
  'Marc Jacobs',
  'Marchesa Notte',
  'Maria Tash',
  'Marine Serre',
  'Marni',
  'Marysia',
  'Maticevski',
  'Max Mara',
  'Melissa Kaye',
  'Melissa Odabash',
  'Missoni',
  'Missoni Mare',
  'Miu Miu',
  'MM6 Maison Margiela',
  'Moncler',
  'Moncler Genius',
  'Moncler Grenoble',
  'Monique Lhuillier',
  'Monse',
  'Moon Boot',
  'Mugler',
  'Nanushka',
  'Nike',
  'Nodaleto',
  'Noir Kei Ninomiya  coming soon',
  'Norma Kamali',
  'Off-White',
  'Oscar de la Renta',
  'Oséree',
  'Paco Rabanne',
  'Palm Angels',
  'Paris Texas',
  'Perfect Moment',
  'Petar Petrov',
  'Peter Do',
  'Philosophy Di Lorenzo Serafini',
  'Plan C',
  'Polo Ralph Lauren',
  'Poupette St Barth',
  'Prada',
  'Proenza Schouler',
  'Rasario',
  'Ratio et Motus',
  'Ray-Ban',
  'Re/Done',
  'Rebecca Vallance',
  'REDV',
  'Reebok x Victoria Beckham',
  'Reina Olga',
  'Repossi',
  'Rick Owens',
  'Rixo',
  'Rodarte',
  'Roger Vivier',
  'Roksanda',
  'Roland Mouret',
  'Rotate Birger Christensen',
  'RtA',
  'Ruslan Baginskiy  coming soon',
  'S Max Mara',
  'Sacai',
  'Safiyaa',
  'Saint Laurent',
  'Salvatore Ferragamo',
  'See By Chloé',
  'Self-Portrait',
  'Simone Rocha',
  'SIR',
  'Slvrlake',
  'Sophie Bille Brahe',
  'Sophie Buhai',
  'Sorel',
  'Souliers Martinez',
  'Spinelli Kilcollin',
  'Staud',
  'Stella McCartney',
  'Stouls',
  'Suzanne Kalan',
  'Sydney Evan',
  'The Attico',
  'The Row',
  'The Upside',
  'Thom Browne',
  'Tilly Sveaas',
  'Timeless Pearly',
  "Tod's",
  'Tom Ford',
  'Toni Sailer',
  'Tory Burch',
  'Tory Sport',
  'Toteme ',
  'Tropic of C',
  'Ulla Johnson',
  'Valentino / Garavani',
  'Varley',
  'Velvet',
  'Veronica Beard',
  'Versace',
  'Vetements',
  'Victoria Beckham',
  'Victoria Victoria Beckham',
  'Vince',
  'Visvim WMV',
  'Wandler',
  'Wardrobe.NYC',
  'Wolford',
  'Y/Project',
  'Yves Salomon  coming soon',
  'Zeynep Arçay',
  'Zimmermann'
]

// NAMES
let names = [
  'Dresses',
  'Tops',
  'Knitwear',
  'Jackets',
  'Suits',
  'Pants',
  'Jeans',
  'Skirts',
  'Coats',
  'Skiwear',
  'Activewear',
  'Beachwear',
  'Shorts',
  'Jumpsuits',
  'Shoes',
  'Bags'
]

// SIZES
let sizes = [
  { text: 'XS', value: 'XS' },
  { text: 'S', value: 'S' },
  { text: 'M', value: 'M' },
  { text: 'L', value: 'L' },
  { text: 'XL', value: 'XL' }
]

// COLOURS
let colors = [
  { text: 'beige', value: 'beige' },
  { text: 'black', value: 'black' },
  { text: 'blue', value: 'blue' },
  { text: 'brown', value: 'brown' },
  { text: 'gold', value: 'gold' },
  { text: 'green', value: 'green' },
  { text: 'grey', value: 'grey' },
  { text: 'metallic', value: 'metallic' },
  { text: 'orange', value: 'orange' },
  { text: 'pink', value: 'pink' },
  { text: 'purple', value: 'purple' },
  { text: 'red', value: 'red' },
  { text: 'silver', value: 'silver' },
  { text: 'turquoise', value: 'turquoise' },
  { text: 'white', value: 'white' },
  { text: 'yellow', value: 'yellow' }
]

let sex = ['Man', 'Woman']

// INITIATES PRODUCTS VAR
let products = {}

// CREATES RANDOM PRICE
let randomPrice = (min = 400, max = 50000) => {
  let num = Math.random() * (max - min) + min
  Math.floor(num)
  return Math.round(num / 100) * 100 - 1
}

// LOOPS TROUGH NAMES AND CREATES 6 products in EACH CATEGORIE
names.forEach(name => {
  // CREATES RANDOM ARRAY
  function randomGenerator(array, length) {
    let randomArray = array.slice(
      Math.floor(Math.random() * array.length),
      array.length
    )
    for (let i = randomArray.length; i > length; i--) {
      randomArray.pop()
    }
    return randomArray
  }

  // CREATES 6 RANDOM PRODUCTS
  for (let i = 0; i < 6; i++) {
    products[uuid.v4()] = {
      brand: brands[Math.floor(Math.random() * brands.length)],
      name: name,
      color: randomGenerator(colors, 4),
      price: randomPrice(200, 5000),
      size: randomGenerator(sizes, 5),
      sex: sex[i % 2 ? 0 : 1]
    }
  }
})

export default products
