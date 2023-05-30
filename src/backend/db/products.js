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
    originalPrice: 500,
    productImage:
      "https://i.ibb.co/C82sGMs/Earphones-with-neck-guitar-in-the-studio.jpg",
    productDescription: ` `,
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
    originalPrice: 700,
    productImage:
      "https://i.ibb.co/wz1Hs4b/A-Bluetooth-headset-blue-color-isolated-on-white-background-closeup-shot.jpg",
    productDescription: ` `,
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
    originalPrice: 900,
    productImage:
      "https://i.ibb.co/DgNjp7D/woman-accessories-closeup-shiny-gold-women-wristwatch.jpg",
    productDescription: ` `,
    categoryName: "gadgets",
   
    ratingSign: "⭐⭐",
    rating: 2.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true
    
  },
  {
    _id: uuid(),
    title: "Clothes",
    author: "",
    discountPrice: 70,
    originalPrice: 1000,
    productImage:
      "https://i.ibb.co/h7WRyzM/Stylish-business-clothing-for-businessman-Men-s-clothing-on-a-wooden-background.jpg",
    productDescription: ` `,
    categoryName: "menWear",
    ratingSign: "⭐⭐⭐",
    rating: 3.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,
  },
  {
    _id: uuid(),
    title: "Clothes",
    author: "",
    discountPrice: 200,
    originalPrice: 800,
    productImage:
      "https://i.ibb.co/tLDzkxW/Mens-suits-in-different-colors-hanging-on-hanger-in-a-retail-clothes-store-close-up.jpg",
    productDescription: ` `,
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
    title: "Clothes",
    author: "",
    discountPrice: 300,
    originalPrice: 1200,
    productImage:
      "https://i.ibb.co/s2vVtLz/Fashion-portrait-of-a-handsome-young-businessman.jpg",
    productDescription: ` `,
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
    productDescription: ` `,
    categoryName: "kidsWear",
    ratingSign: "⭐⭐⭐⭐",
    rating: 4.5,
    wishlistAdded: false,
    cartAdded: false,
    inStock:true,

  },
  {
    _id: uuid(),
    title: "Clothes",
    author: "",
    discountPrice: 900,
    originalPrice: 4000,
    productImage:
      "https://i.ibb.co/swSqwvb/portrait-of-positive-russian-woman-and-girl-shopping-kids-apparel-in-clothes-store.jpg",
    productDescription: ` `,
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
    discountPrice: 100,
    originalPrice: 300,
    productImage:
      "https://i.ibb.co/8Mt2MDn/Eco-baby-clothes-and-accessories-concept-Wooden-toy-clothes-and-shoes-on-green-background-with-blank.jpg",
    productDescription: ` `,
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
    originalPrice: 250,
    productImage:
      "https://i.ibb.co/yQSvMh6/School-supplies-on-green-background.jpg",
    productDescription: ` `,
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
    productDescription: ` `,
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
    originalPrice: 650,
    productImage:
      "https://i.ibb.co/4fG8TkD/Two-young-women-choosing-dresses-in-a-luxury-fashion-store.jpg",
    productDescription: ` `,
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
    originalPrice: 650,
    productImage: "https://i.ibb.co/9b0JHS5/Luxury-handbags.jpg",
    productDescription: ` `,
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
    categoryName: "menWear",
    ratingSign: "⭐⭐⭐",
    rating: 3.5,
    trending:true,
    inStock:true,

  },
 
 
];
