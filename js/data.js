import { PRODACTSJSON } from "./const.js"
export let PRODUCTSDATA = JSON.parse(localStorage.getItem(PRODACTSJSON)) || [
  {
    id:"1",
    name:"Olma",
    quantity:4000,
    img:"https://daryo.uz/static/2023/04/643001a6d1a81.jpg",
    unit:"kg",
    color:"Red",
    price:35000
  },
  {
    id:"2",
    name:"Banan",
    quantity:200,
    img:"https://daryo.uz/static/2023/04/643001a6d1a81.jpg",
    unit:"kg",
    color:"Yellov",
    price:20000
  },
  {
    id:"3",
    name:"Samsung s24 ultra",
    quantity:1340,
    img:"https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff4c85667-4ca7-4357-a327-f742a24d9908_4500x3000.jpeg",
    unit:"dona",
    color:"Seven titanium",
    price:15600000
  },
  {
    id:"4",
    name:"Qalom",
    quantity:4000,
    img:"https://olcha.uz/image/400x400/products/2022-04-03/karandash-hb-deli-011-2b-c-siniy-1-44539-0.jpeg",
    unit:"kg",
    color:"Red",
    price:35000
  },
  {
    id:"5",
    name:"Ruchka",
    quantity:200,
    img:"https://img.freepik.com/free-vector/vector-fountain-writing-pen-for-contract-signing_1284-41915.jpg",
    unit:"kg",
    color:"Yellov",
    price:20000
  },
  {
    id:"6",
    name:"Shaptoli",
    quantity:1340,
    img:"https://daryo.uz/cache/2022/08/955-800x600.png",
    unit:"dona",
    color:"Seven titanium",
    price:15600000
  },
  
]