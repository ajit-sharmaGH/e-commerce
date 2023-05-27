import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description: "Men Collection",
    categoryImage:
      "https://i.ibb.co/tLDzkxW/Mens-suits-in-different-colors-hanging-on-hanger-in-a-retail-clothes-store-close-up.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description: "Women Collection",
    categoryImage:
      "https://i.ibb.co/XD8q0Bj/Side-view-of-calm-young-adult-girl-standing-near-wardrobe-choosing-stylish-clothes-compared-trendy-o.jpg",
  },

  {
    _id: uuid(),
    categoryName: "Kids",
    description: "Kids Collection",
    categoryImage:
      "https://i.ibb.co/LdG2zYs/Cute-happy-little-girl-embracing-teddy-bear-Pretty-female-kid-at-home-sitting-on-sofa-with-her-favor.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Gadgets",
    description: "Gadgets Collection",
    categoryImage:
      "https://i.ibb.co/W2cSP4y/Several-smart-phones-with-large-touch-screens-and-two-digital-tablets-are-placed-in-a-pile-All-brand.jpg",
  },
];
