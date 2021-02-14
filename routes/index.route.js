var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const phones = [
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/1.jpg"
    },
    {
      name: "Sony Xperia XZ2",
      description: "Xperia nuevo en caja",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/2.jpg"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/3.jpg"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/4.jpg"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/5.jpg"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/6.jpg"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/7.jpg"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/8.jpg"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/9.jpg"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/10.jpg"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/11.png"
    },
    {
      name: "Samsung Galaxy S9",
      description: "Samsung Galaxy S9",
      price: Math.floor(Math.random() * 3000) + 500,
      img: "/img/12.jpg"
    },
  ]
  res.render('index', {
    title: 'Tienda e-commerce',
    year: new Date().getFullYear(),
    codeSec: 'home',
    phones
  });
});

router.get('/success', (req, res) => {
  res.render('success', {
    title: "success payment",
    year: new Date().getFullYear(),
    codeSec: ""
  });
});

module.exports = router;