const express = require("express");

const router = express.Router();
// const router = require("./home");
// const app = express();
// const port = 3000;

// app.set("view engine", "ejs");
// app.use(express.static("public"));
const mainController = require("../controllers/navdrop");
router.get("/", mainController.getMainmenu);

const mainMenu = [
  {
    name: "Home",
    url: "/",
    subMenu: [],
  },
  {
    name: "Products",
    url: "/products",
    subMenu: [
      {
        name: "Laptops",
        url: "/products/laptops",
      },
      {
        name: "Smartphones",
        url: "/products/smartphones",
      },
    ],
  },
  {
    name: "About",
    url: "/about",
    subMenu: [],
  },
  {
    name: "Contact",
    url: "/contact",
    subMenu: [],
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Home", mainMenu });
});

app.get("/products", (req, res) => {
  res.render("products", { title: "Products", mainMenu });
});

app.get("/products/laptops", (req, res) => {
  res.render("laptops", { title: "Laptops", mainMenu });
});

app.get("/products/smartphones", (req, res) => {
  res.render("smartphones", { title: "Smartphones", mainMenu });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", mainMenu });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact", mainMenu });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = router;
