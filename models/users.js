const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        email: String,
        password: String
    },
    {
        timestamps: true,
        collection: "users"
    }
)

module.exports = mongoose.model("users", schema)