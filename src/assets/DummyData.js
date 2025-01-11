import img1 from "./p1.jpg";
import img2 from "./p2.jpg";
import img3 from "./p3.jpg";
import img4 from "./p4.jpg";
import img5 from "./p5.jpg";
import img6 from "./p6.jpg";
import img7 from "./p7.jpg";
import img8 from "./p8.jpg";
import img9 from "./p9.jpg";
import img10 from "./p10.jpg";
import img11 from "./p11.jpg";
import img12 from "./p12.jpg";
import img13 from "./p13.jpg";
import img14 from "./p14.jpg";
import img15 from "./p15.jpg";
import img16 from "./p16.jpg";
import img17 from "./p17.jpg";
import img18 from "./p18.jpg";
import img19 from "./p19.jpg";
import img20 from "./p20.jpg";

const data = [
  {
    product_id: "CLOTH001",
    product_name: "Men's Classic White T-Shirt",
    product_price: 2599,
    product_desc:
      "A comfortable and stylish white t-shirt made from 100% organic cotton.",
    tags: ["men", "t-shirt", "white", "organic", "cotton"],
    image: img1,
    product_stock: 50,
  },
  {
    product_id: "CLOTH002",
    product_name: "Women's Floral Summer Dress",
    product_price: 4550,
    product_desc:
      "A lightweight and breezy summer dress with a beautiful floral print.",
    tags: ["women", "dress", "summer", "floral", "lightweight"],
    image: img2,
    product_stock: 30,
  },
  {
    product_id: "CLOTH003",
    product_name: "Men's Slim Fit Jeans",
    product_price: 3999,
    product_desc:
      "Dark blue slim fit jeans made from stretchable denim fabric for extra comfort.",
    tags: ["men", "jeans", "denim", "slim fit", "blue"],
    image: img3,
    product_stock: 40,
  },
  {
    product_id: "CLOTH004",
    product_name: "Women's Black Leather Jacket",
    product_price: 1200,
    product_desc:
      "Stylish black leather jacket with a sleek design for a bold look.",
    tags: ["women", "jacket", "leather", "black", "bold"],
    image: img4,
    product_stock: 25,
  },
  {
    product_id: "CLOTH005",
    product_name: "Men's Hoodie with Front Pocket",
    product_price: 3075,
    product_desc:
      "A warm hoodie with a front pocket, perfect for cold weather.",
    tags: ["men", "hoodie", "casual", "winter", "pocket"],
    image: img5,
    product_stock: 60,
  },
  {
    product_id: "CLOTH006",
    product_name: "Women's Denim Shorts",
    product_price: 2299,
    product_desc:
      "Casual denim shorts with a comfortable fit, perfect for summer.",
    tags: ["women", "shorts", "denim", "summer", "casual"],
    image: img6,
    product_stock: 45,
  },
  {
    product_id: "CLOTH007",
    product_name: "Men's Formal Blue Shirt",
    product_price: 2500,
    product_desc:
      "A classic blue shirt for formal occasions, made from premium fabric.",
    tags: ["men", "shirt", "formal", "blue", "classic"],
    image: img7,
    product_stock: 35,
  },
  {
    product_id: "CLOTH008",
    product_name: "Women's Workout Leggings",
    product_price: 2899,
    product_desc:
      "High-waisted leggings with a stretchy and breathable material for workouts.",
    tags: ["women", "leggings", "workout", "fitness", "stretchy"],
    image: img8,
    product_stock: 70,
  },
  {
    product_id: "CLOTH009",
    product_name: "Men's Casual Cotton Shorts",
    product_price: 999,
    product_desc: "Comfortable cotton shorts for a relaxed and casual look.",
    tags: ["men", "shorts", "cotton", "casual", "relaxed"],
    image: img9,
    product_stock: 55,
  },
  {
    product_id: "CLOTH010",
    product_name: "Women's Sleeveless Top",
    product_price: 1899,
    product_desc:
      "A sleeveless top with a minimalistic design, ideal for casual wear.",
    tags: ["women", "top", "sleeveless", "casual", "minimalistic"],
    image: img10,
    product_stock: 48,
  },
  {
    product_id: "CLOTH011",
    product_name: "Men's Bomber Jacket",
    product_price: 4999,
    product_desc:
      "A stylish bomber jacket with ribbed cuffs and a zip closure.",
    tags: ["men", "jacket", "bomber", "stylish", "ribbed"],
    image: img11,
    product_stock: 20,
  },
  {
    product_id: "CLOTH012",
    product_name: "Women's High-Waist Skirt",
    product_price: 2750,
    product_desc:
      "A chic high-waist skirt with pleats, perfect for formal or casual wear.",
    tags: ["women", "skirt", "high-waist", "pleats", "chic"],
    image: img12,
    product_stock: 40,
  },
  {
    product_id: "CLOTH013",
    product_name: "Men's Polo Shirt",
    product_price: 2999,
    product_desc:
      "A breathable and stylish polo shirt, perfect for casual outings.",
    tags: ["men", "polo", "shirt", "casual", "breathable"],
    image: img13,
    product_stock: 65,
  },
  {
    product_id: "CLOTH014",
    product_name: "Women's Cotton Tank Top",
    product_price: 1499,
    product_desc: "A lightweight cotton tank top for a relaxed summer look.",
    tags: ["women", "tank top", "cotton", "summer", "relaxed"],
    image: img14,
    product_stock: 50,
  },
  {
    product_id: "CLOTH015",
    product_name: "Men's Waterproof Jacket",
    product_price: 4999,
    product_desc:
      "A durable and waterproof jacket, ideal for outdoor adventures.",
    tags: ["men", "jacket", "waterproof", "outdoor", "durable"],
    image: img15,
    product_stock: 30,
  },
  {
    product_id: "CLOTH016",
    product_name: "Women's Knit Sweater",
    product_price: 4299,
    product_desc: "A soft and cozy knit sweater for cold winter days.",
    tags: ["women", "sweater", "knit", "winter", "cozy"],
    image: img16,
    product_stock: 40,
  },
  {
    product_id: "CLOTH017",
    product_name: "Men's Cargo Pants",
    product_price: 3699,
    product_desc:
      "Comfortable cargo pants with multiple pockets for an adventurous look.",
    tags: ["men", "pants", "cargo", "adventure", "pockets"],
    image: img17,
    product_stock: 25,
  },
  {
    product_id: "CLOTH018",
    product_name: "Women's Lace Blouse",
    product_price: 3499,
    product_desc:
      "A delicate lace blouse with intricate detailing, perfect for formal events.",
    tags: ["women", "blouse", "lace", "formal", "delicate"],
    image: img18,
    product_stock: 35,
  },
  {
    product_id: "CLOTH019",
    product_name: "Men's Graphic Tee",
    product_price: 1599,
    product_desc: "A trendy graphic t-shirt with a cool urban design.",
    tags: ["men", "t-shirt", "graphic", "urban", "trendy"],
    image: img19,
    product_stock: 75,
  },
  {
    product_id: "CLOTH020",
    product_name: "Women's Wide-Leg Trousers",
    product_price: 3999,
    product_desc:
      "Elegant wide-leg trousers, perfect for both office and casual wear.",
    tags: ["women", "trousers", "wide-leg", "elegant", "office"],
    image: img20,
    product_stock: 28,
  },
];

export default data;
