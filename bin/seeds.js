require("dotenv").config();

const mongoose = require("mongoose");
const Sneaker = require("../models/Sneaker");

const sneakers = [{
    name: "Converse",
    ref: "1",
    size: 42,
    description: "Classic Chuck Taylor shoe",
    price: 50,
    category: "women",
    id_tags: [],
}, {
    name: "Nike",
    ref: "2",
    size: 41,
    description: "The brand with the virgule",
    price: 90,
    category: "kids",
    id_tags: [],
}, {
    name: "Adidas",
    ref: "3",
    size: 43,
    description: "A staple for the russian tracksuit lovers",
    price: 80,
    category: "men",
    id_tags: [],
}, {
    name: "Reebok",
    ref: "4",
    size: 44,
    description: "Some say it makes you go faster",
    price: 60,
    category: "kids",
    id_tags: [],
}];

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then((self) => {
        console.log(`Connected to ${self.connection.name}`);
        Sneaker.create(sneakers)
            .then((createdSneakers) => console.log(createdSneakers))
            .catch((err) => console.log(err));
    })
    .catch((err) => {
        console.log(err);
    });