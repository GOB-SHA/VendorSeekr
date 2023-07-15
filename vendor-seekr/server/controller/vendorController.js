const db = require("../models/db.js");

const vendorController = {};

vendorController.getVendors = async (req, res, next) => {
  // console.log("vendorController.getVendors firing");
  const getVendors = "SELECT * FROM vendor";
  try {
    const vendors = await db.query(getVendors);
    // console.log("vendors.rows: ", vendors.rows);
    res.locals.vendors = vendors.rows;
    next();
  } catch (err) {
    console.log(err);
    next({ log: "error in getMarket middleware", message: { err: err } });
  }
};

vendorController.likeVendor = async (req, res, next) => {
  console.log(".likevendor controller firing");
  console.log("req.bod: ", req.body);
  const { user_id, vendor_id } = req.body;
  try {
    const likeVendorQuery = `INSERT INTO "public"."user_liked_vendors" (user_id, vendor_id) VALUES (${user_id}, ${vendor_id});`;
    console.log(likeVendorQuery);
    // const values = ["user_id", "vendor_id"];
    await db.query(likeVendorQuery);
    // res.locals.liked = insertLike;
    next();
  } catch (error) {
    next((err) => {
      {
        log: "error in likeVendor middleware";
        message: {
          err: err;
        }
      }
    });
  }
};
vendorController.getLikedVendors = async (req, res, next) => {
  try {
    console.log("req.params: ", req.params);
    const user_id = req.params.id;
    // const likeVendorQuery = `SELECT * FROM "public"."user_liked_vendors" WHERE ${user_id}=$1`;
    const likeVendorQuery = 'SELECT * FROM "public"."vendor" WHERE id IN (SELECT vendor_id FROM "public"."user_liked_vendors" WHERE user_id = $1)';
    const values = [user_id];
    const likeList = await db.query(likeVendorQuery, values);
    console.log("likeList.rows: ", likeList);
    res.locals.liked = likeList.rows;
    next();
  } catch (error) {
    next({
      log: "error in getlikedVendors middleware",
      message: { err: error },
    });
  }
};

module.exports = vendorController;
