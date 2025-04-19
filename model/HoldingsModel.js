const {model} = require("mongoose");

const {HoldingsSchema} = require('../schemas/HoldingsSchema');
//collection name -> holding
const HoldingsModel = new model("holding" , HoldingsSchema);

module.exports = {HoldingsModel};