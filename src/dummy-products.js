import mochaOvercoat from './assets/mocha-overcoat.jpg';
import dreamGown from './assets/dream-gown.jpg';
import rainJacket from './assets/rain-jacket.jpg';
import merlotSuit from './assets/merlot-suit.jpg';
import moonlightDress from './assets/moonlight-dress.jpg';
import denimPioneer from './assets/denim-pioneer.jpg';


// this is tottaly dummy data and imgs
export const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    image: mochaOvercoat,
    title: 'Aeropostale Essential T-Shirt Essential T-Shirt',
    price: 129.99,
    description:
      'Just your everyday smooth, comfy tee, a wardrobe staple Slim fit, so size up if you prefer a looser fit, or check out the Classic T-Shirt.',
  },
  {
    id: 'p2',
    image: dreamGown,
    title: 'Aeropostale Essential T-Shirt Pullover Hoodie',
    price: 189.99,
    description:
      'Note: If you like your hoodies baggy go 2 sizes up Heavyweight 8.25 oz. (~280 gsm) cotton-rich fleece Solid colors are 80% cotton, 20% polyester. Heather Grey is 70% cotton, 30% polyester. Charcoal Heather is 60% cotton, 40% polyester.',
  },

  {
    id: 'p3',
    image: rainJacket,
    title: 'AEROPOSTALE Europe Africa America Postal Service French Classic T-Shirt',
    price: 49.99,
    description:
      'Heavyweight 5.3 oz / 180 gsm fabric, solid colors are 100% preshrunk cotton, heather grey is 90% cotton/10% polyester, denim heather is 50% cotton/ 50% polyester.',
  },
  {
    id: 'p4',
    image: merlotSuit,
    title: 'AEROPOSTALE Europe Hoodie',
    price: 249.99,
    description:
    'The third party printer of this product is evaluated according to International Labor Organization standards.',
    },
    {
    id: 'p5',
    image: moonlightDress,
    title: 'Arecibo Message Pullover Hoodie',
    price: 159.99,
    description:
    'Solid colors are 80% cotton, 20% polyester. Heather Grey is 70% cotton, 30% polyester. Charcoal Heather is 60% cotton, 40% polyester',
    },
    {
    id: 'p6',
    image: denimPioneer,
    title: 'AMERICAN DAD Pullover Hoodie',
    price: 79.99,
    description:
    'The printer of this product sources blanks from manufacturers committed to improving cotton farming practices with the Better Cotton Initiative.'
    }
];
