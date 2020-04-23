const mongoose = require('mongoose')

const sneakerSchema = new mongoose.Schema({
    name: String,
    ref: String,
    size: Number,
    description: String,
    price: Number,
    category: {
        type: String,
        enum: [
            "men",
            "women",
            "kids",
        ],
    },
    id_tags: [Schema.Types.ObjectId],
})

const Sneaker = mongoose.model("Sneaker", sneakerSchema)

module.exports = Sneaker