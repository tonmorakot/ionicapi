const users = require("../models/users")

exports.index = async (req, res, next) => {
    let data = await users.find();
    res.status(200).json(data);
}