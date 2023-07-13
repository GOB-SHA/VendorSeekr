const db = require("../models/db.js");

const vendorController = {};

vendorController.getVendors = async () => {
  console.log("vendorController.getVendors firing");
  const getVendors = "SELECT * FROM vendor";
  try {
    const vendors = await db.query(getVendors);
    console.log(vendors);
    res.locals.vendors = vendors.rows;
    next();
  } catch (err) {
    console.log(err);
    next({ log: "error in getMarket middleware", message: { err: err } });
  }
};
module.exports = vendorController;
