import logo from "./logo.png";
import profile from "./profile.avif"
import cart from "./cart.png"
import menu from "./menu.png"
import search from "./search.webp"
import banner from "./banner.jpg"
import fruits from "./fruits.png"
import bread from "./bread.png"
import drinks from "./drinks.png"
import dairy from "./dairy.png"
import grains from "./grains.png"
import packet from "./packet.png"
import vegitable from "./vegitable.png"
import GreenApple1 from "./GreenApple1.jpg"
import GreenApple2 from "./GreenApple2.webp"
import GreenApple3 from "./GreenApple3.webp"
import GreenApple4 from "./GreenApple4.jpeg"
import star from "./staricon.png"
import star_outline from "./staricondull.png"
import foot_banner from "./foot_banner.jpeg"
import remove from "./remove.png"
import left_arrow from "./left_arrow.png"
import map from "./map.png"
import add_icon from "./add_icon.png"
import list from "./list.png"
import order from "./order_icon.png"
import upload_area from "./upload.jpg"

export const assets = {
    logo, 
    profile,
    cart,
    menu,
    search,
    banner,
    star,
    star_outline,
    foot_banner,
    remove,
    left_arrow,
    map,
    add_icon,
    list, 
    order,
    upload_area
}

export const categories = [
    {
        text: "Vegitables",
        path: "Vegitables",
        image: vegitable,
        bgColor: "#D6EFD8"
    },
    {
        text: "Fruits",
        path: "Fruits",
        image: fruits,
        bgColor: "#F5F7F8"
    },
    {
        text: "Backed Products",
        path: "Breads",
        image: bread,
        bgColor: "#FBEFEF"
    },
    {
        text: "Drinks",
        path: "Drinks",
        image: drinks,
        bgColor: "#E0FBE2"
    },
    {
        text: "Dairy Products",
        path: "Dairy",
        image: dairy,
        bgColor: "#F5EEE6"
    },
    {
        text: "Grains",
        path: "Grains",
        image: grains,
        bgColor: "#F1EAFF"
    },
    {
        text: "Snacks and Instant Products",
        path: "Packets",
        image: packet,
        bgColor: "#E3F4F4"
    },
]

export const dummyProducts = [
    {
        id: "gd46g23h",
        name: "Green Apple 1kg",
        category: "Fruits",
        price: 250,
        offerPrice: 20,
        image: [GreenApple1, GreenApple2, GreenApple3, GreenApple4],
        description: [
            "Fresh and Organic",
            "Rich in Vitamin C",
            "Good For Children"
        ],
        createdAt: "2026-03-03T07:17:46:018Z",
        updatedAt: "2026-03-03T07:17:46:018Z",
        inStock: true,
    },
    {
        id: "gd46g23h",
        name: "Green Apple 1kg",
        category: "Fruits",
        price: 250,
        offerPrice: 20,
        image: [GreenApple1, GreenApple2, GreenApple3, GreenApple4],
        description: [
            "Fresh and Organic",
            "Rich in Vitamin C",
            "Good For Children"
        ],
        createdAt: "2026-03-03T07:17:46:018Z",
        updatedAt: "2026-03-03T07:17:46:018Z",
        inStock: true,
    },
    {
        id: "gd46g23h",
        name: "Green Apple 1kg",
        category: "Fruits",
        price: 250,
        offerPrice: 20,
        image: [GreenApple1, GreenApple2, GreenApple3, GreenApple4],
        description: [
            "Fresh and Organic",
            "Rich in Vitamin C",
            "Good For Children"
        ],
        createdAt: "2026-03-03T07:17:46:018Z",
        updatedAt: "2026-03-03T07:17:46:018Z",
        inStock: true,
    },
    {
        id: "gd46g23h",
        name: "Green Apple 1kg",
        category: "Fruits",
        price: 250,
        offerPrice: 20,
        image: [GreenApple1, GreenApple2, GreenApple3, GreenApple4],
        description: [
            "Fresh and Organic",
            "Rich in Vitamin C",
            "Good For Children"
        ],
        createdAt: "2026-03-03T07:17:46:018Z",
        updatedAt: "2026-03-03T07:17:46:018Z",
        inStock: true,
    },
    {
        id: "gd46g23h",
        name: "Green Apple 1kg",
        category: "Fruits",
        price: 250,
        offerPrice: 20,
        image: [GreenApple1, GreenApple2, GreenApple3, GreenApple4],
        description: [
            "Fresh and Organic",
            "Rich in Vitamin C",
            "Good For Children"
        ],
        createdAt: "2026-03-03T07:17:46:018Z",
        updatedAt: "2026-03-03T07:17:46:018Z",
        inStock: true,
    },
]

export const dummyAddress = [
    {
        street: "Khulshi",
        city: "Chittagong City",
        state: "Chittagong",
        country: "Bangladesh"
    }
]

export const dummyOrders = [
  {
    id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 2,
        id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },

  {
    id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
]