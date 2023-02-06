export const ROUTE = {
  HOME: "/",
  NOT_FOUND: "*",
  ACCOUNT: "/account",
  LOGIN: "/account/login",
  REGISTER: "/account/register",
};

export const MAX_SEARCH_RESULT_ITEM = 10;

export const SLIDE_DATA = [
  {
    img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/files/slider1-min.jpg?v=1593257108",
    title: ["Fresh Fruits ", " & vegetable"],
    thumbnail: "Summer Vege sale",
    position: "left",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/files/slider2.jpg?v=1593431537",
    title: ["Prod Of Indian  ", "100% Pacaging"],
    thumbnail: "Organic Indian Masala",
    position: "right",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/files/slider3_7f623fd1-a932-4b5c-92c7-292044869712.jpg?v=1624439470",
    title: ["Fresh for your", " heath"],
    thumbnail: "Top Selling!",
    position: "center",
  },
];

export const NAVBAR_DATA = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Shop",
    path: "/shop",
    dropdownData: [
      {
        id: 1,
        name: "Fresh food",
        data: [
          "Fruit & Nut",
          "Snack Foods",
          "Organics Nut Gifts",
          "Non-Dairy",
          "Delicius Chiken Hotdogs",
        ],
      },
      {
        id: 2,
        name: "MixedFruits",
        data: [
          "Oranges",
          "Ghee Beverages",
          "Ranch Salad",
          "Fresh avocado",
          "Fresh blueberry",
        ],
      },
      {
        id: 3,
        name: "Bananas & Plantains",
        data: [
          "Fresh Gala",
          "Fifts Mixed Fruits",
          "Fresh organic",
          "West Indian Onionsalad",
          "Vegetable tomato",
        ],
      },
      {
        id: 4,
        name: "Apples Berries",
        data: [
          "Pears Produce",
          "Fresh green orange",
          "Blackberry 100% organic",
          "Vegetable Italian Salad",
          "Special Corn Noodels",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Collection",
    path: "/collection",
    dropdownData: [
      {
        id: 1,
        name: "Bestseller",
        img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/collections/banner4_560x350_crop_center.jpg?v=1595936653",
      },
      {
        id: 2,
        name: "Special Product",
        img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/collections/banner6_560x350_crop_center.jpg?v=1595936651",
      },
      {
        id: 3,
        name: "Featured Product",
        img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/collections/banner5_19e6fd2c-70b2-459d-b4d5-d7680262856a_560x350_crop_center.jpg?v=1595936691",
      },
    ],
  },
  {
    id: 4,
    name: "About Us",
    path: "/about",
  },
  {
    id: 5,
    name: "Faq's",
    path: "/faq's",
  },
  {
    id: 6,
    name: "Blogs",
    path: "/blogs",
  },

  {
    id: 7,
    name: "Login",
    path: "/login",
  },

  {
    id: 8,
    name: "Register",
    path: "/register",
  },
];
