import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Headphone",
    author: "",
    discountPrice: 100,
    originalPrice: 40000,
    productImage:
      "https://i.ibb.co/C82sGMs/Earphones-with-neck-guitar-in-the-studio.jpg",
    productDescription: "Advance headphone suitable and best fitted to the khopadi of every individual must try once and be addicted to it ",
    categoryName: "gadgets",
    ratingSign: "⭐⭐⭐",
    rating: 3.5,
    trending:true,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,
  },
  {
    _id: uuid(),
    title: "Earphone",
    author: "",
    discountPrice: 150,
    originalPrice: 30000,
    productImage:
      "https://i.ibb.co/wz1Hs4b/A-Bluetooth-headset-blue-color-isolated-on-white-background-closeup-shot.jpg",
      productDescription: "Advance Earphone suitable and flexible to the ear, it has dolby  sound quality  ",
    categoryName: "gadgets",
    ratingSign: "⭐⭐⭐⭐",
    rating: 4.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,
  },
  {
    _id: uuid(),
    title: "Wrist-Watch",
    author: "",
    discountPrice: 10,
    originalPrice: 25000,
    productImage:
      "https://i.ibb.co/DgNjp7D/woman-accessories-closeup-shiny-gold-women-wristwatch.jpg",
      productDescription: "Advance and modern wrist watch, it keeps you ahead of your time, suitable of ladies only",
    categoryName: "gadgets",
   
    ratingSign: "⭐⭐",
    rating: 2.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true
    
  },
  {
    _id: uuid(),
    title: "Stylish Clothes",
    author: "",
    discountPrice: 70,
    originalPrice: 15000,
    productImage:
      "https://i.ibb.co/h7WRyzM/Stylish-business-clothing-for-businessman-Men-s-clothing-on-a-wooden-background.jpg",
      productDescription: "Mast quality threads, comfort in summer and winter but not in rain",
    categoryName: "menWear",
    ratingSign: "⭐⭐⭐",
    rating: 3.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,
  },
  {
    _id: uuid(),
    title: "Men Suits",
    author: "",
    discountPrice: 200,
    originalPrice: 8000,
    productImage:
      "https://i.ibb.co/tLDzkxW/Mens-suits-in-different-colors-hanging-on-hanger-in-a-retail-clothes-store-close-up.jpg",
      productDescription: "Mast quality threads used, comfort in summer and winter but not in rain",
    trending:true,

    categoryName: "menWear",
    ratingSign: "⭐⭐",
    rating: 2.5,
    wishlistAdded: false,
    cartAdded: false,   
     inStock:true,

  },
  {
    _id: uuid(),
    title: "Men Clothes",
    author: "",
    discountPrice: 300,
    originalPrice: 12000,
    productImage:
      "https://i.ibb.co/s2vVtLz/Fashion-portrait-of-a-handsome-young-businessman.jpg",
      productDescription: "Mast quality threads used, comfort in summer and winter but not in rain",
    categoryName: "menWear",
    ratingSign: "⭐⭐⭐⭐",
    rating: 4.5,
    wishlistAdded: false,
    cartAdded: false,  
      inStock:false,

  },
  
  {
    _id: uuid(),
    title: "Clothes",
    author: "",
    discountPrice: 300,
    originalPrice: 9000,
    productImage:
      "https://i.ibb.co/pPNq5Jc/Child-girl-collage-clothes-colorful-isolated-on-white-Kid-s-female-apparel-cotton-Set-of-summer-brig.jpg",
      productDescription: "Mast quality threads used, comfort in summer and winter but not in rain",
    categoryName: "kidsWear",
    ratingSign: "⭐⭐⭐⭐",
    rating: 4.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,

  },
  {
    _id: uuid(),
    title: "Kids Clothes",
    author: "",
    discountPrice: 20000,
    originalPrice: 4000,
    productImage:
      "https://i.ibb.co/swSqwvb/portrait-of-positive-russian-woman-and-girl-shopping-kids-apparel-in-clothes-store.jpg",
      productDescription: "Mast quality threads used, comfort in summer and winter but not in rain",
    categoryName: "kidsWear",
    ratingSign: "⭐",
    rating: 1.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,

  },
  {
    _id: uuid(),
    title: "kids-Clothing",
    author: "",
    discountPrice: 3000,
    originalPrice: 2000,
    productImage:
      "https://i.ibb.co/8Mt2MDn/Eco-baby-clothes-and-accessories-concept-Wooden-toy-clothes-and-shoes-on-green-background-with-blank.jpg",
      productDescription: "This is magical clothes for kids, buy it for them and they are not going to cry for the rest of their life ",
    categoryName: "kidsWear",
    ratingSign: "⭐⭐⭐⭐",
    rating: 4.9,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,

  },

  {
    _id: uuid(),
    title: "Geometry-Box",
    author: "",
    discountPrice: 40,
    originalPrice: 2500,
    productImage:
      "https://i.ibb.co/yQSvMh6/School-supplies-on-green-background.jpg",
      productDescription: "This is the magical geometry box, ask it to build another planet like earth and you will get it asap ",
    categoryName: "gadgets",
    ratingSign: "⭐⭐",
    rating: 2.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,

  },
  {
    _id: uuid(),
    title: "Try Camera",
    author: "",
    discountPrice: 90,
    originalPrice: 600,
    productImage: "https://i.ibb.co/5hbhdCK/1.jpg",
    productDescription: "Just amazing and wonderful camera you can watch it only here on monitor screen, no one can touch it nor use it",
    categoryName: "gadgets",
    ratingSign: "⭐",
    rating: 1.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,

  },
  {
    _id: uuid(),
    title: "Clothes",
    author: "",
    discountPrice: 50,
    originalPrice: 1000,
    productImage:
      "https://i.ibb.co/4fG8TkD/Two-young-women-choosing-dresses-in-a-luxury-fashion-store.jpg",
    productDescription: "Special Clothes recent launched into the market ",
    categoryName: "womenWear",
    ratingSign: "⭐⭐⭐",
    rating: 3.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,

  },
  {
    _id: uuid(),
    title: "Ladies Bag",
    author: "",
    discountPrice: 10,
    originalPrice: 6050,
    productImage: "https://i.ibb.co/9b0JHS5/Luxury-handbags.jpg",
    productDescription: "Wonderful bag for Papa Ki Pariyan, just keep money in it and here it goes to double",
    categoryName: "womenWear",
    ratingSign: "⭐⭐",
    rating: 2.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,

  },
  {
    _id: uuid(),
    title: "Shoes",
    author: "",
    discountPrice: 100,
    originalPrice: 5000,
    productImage:"https://i.ibb.co/gdH00y9/Indian-Made-Men-s-Shoe-Isolated-on-Gray.jpg",
    productDescription: "Special shoes this is the same shoes which Thakur from Sholay used to wear it , don't worry we have removed the pin from its sole ",
    categoryName: "menWear",
    ratingSign: "⭐⭐⭐",
    rating: 3.5,
    trending:true,
    inStock:true,

  },
 
 
];
