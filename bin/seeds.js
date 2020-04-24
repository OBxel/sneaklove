require("dotenv").config();

const mongoose = require("mongoose");
const Sneaker = require("../models/Sneaker");

const sneakers = [{
    name: "Converse",
    ref: "1",
    image: "https://cdn.sarenza.net/_img/productsv4/0000231747/0000231747_435653_09_504x690.jpg?202003111542&v=20200423173507&interpolation=lanczos-none&fit=inside|500:685",
    size: 42,
    description: "Classic Chuck Taylor shoe",
    price: 50,
    category: "women",
    id_tags: [],
}, {
    name: "Nike",
    ref: "2",
    image: "https://cdn.sarenza.net/_img/productsv4/0000231130/0000231130_434348_09_504x690.jpg?202003301841&v=20200423173507&interpolation=lanczos-none&fit=inside|500:685",
    size: 41,
    description: "The brand with the virgule",
    price: 90,
    category: "kids",
    id_tags: [],
}, {
    name: "Adidas",
    ref: "3",
    image: "https://cdn.sarenza.net/_img/productsv4/0000208863/0000208863_431903_09_504x690.jpg?202003161848&v=20200423173508&interpolation=lanczos-none&fit=inside|320:215",
    size: 43,
    description: "A staple for the russian tracksuit lovers",
    price: 80,
    category: "men",
    id_tags: [],
}, {
    name: "Reebok",
    ref: "4",
    image: "https://cdn.sarenza.net/_img/productsv4/0000224365/0000224365_421046_09_504x690.jpg?201912031756&v=20200423173511&interpolation=lanczos-none&fit=inside|500:685",
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