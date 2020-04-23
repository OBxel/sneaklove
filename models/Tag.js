const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema({
    label: String,
})

const Tag = mongoose.model("Tag", tagSchema)

module.exports = Tag