const db = require("../models/db.js");

const vendorController = {};

vendorController.getVendors = async (req, res, next) => {
  console.log("vendorController.getVendors firing");
  const getVendors = "SELECT * FROM vendor";
  try {
    const vendors = await db.query(getVendors);
    console.log("vendors.rows: ", vendors.rows);
    res.locals.vendors = vendors.rows;
    next();
  } catch (err) {
    console.log(err);
    next({ log: "error in getMarket middleware", message: { err: err } });
  }
};

vendorController.likeVendor = async (req, res, next) => {
  try {
    const likeVendorQuery = 'INSERT INTO "public"."user_liked_vendors" ("vendor", "user")';
    const values = ['VendorName', 'UserName']; 
    const insertLike = db.query(likeVendorQuery, values);
    next();
  } catch (error) {
    next({ log: "error in likeVendor middleware", message: { err: err } });
  }
}

module.exports = vendorController;
