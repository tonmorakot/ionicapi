const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    c_id: String,
    c_firstname: String,
    c_lastname: String,
    c_address: String,
    c_tel: String,
  },
  {
    timestamps: true,
    collection: "customers",
  }
);

module.exports = mongoose.model("customers", schema);
