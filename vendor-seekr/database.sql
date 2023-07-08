CREATE DATABASE vendorSeekr;

CREATE TABLE "user"(
    "id" SERIAL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(62) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "user" ADD PRIMARY KEY("id");
ALTER TABLE
    "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");
ALTER TABLE
    "user" ADD CONSTRAINT "user_phone_unique" UNIQUE("phone");
ALTER TABLE
    "user" ADD CONSTRAINT "user_username_unique" UNIQUE("username");
CREATE TABLE "market"(
    "id" SERIAL,
    "market_name" VARCHAR(50) NOT NULL,
    "market_type" VARCHAR(6) NOT NULL,
    "street" VARCHAR(20) NOT NULL,
    "city" VARCHAR(20) NOT NULL,
    "state" VARCHAR(2) NOT NULL,
    "zip_code" INTEGER NOT NULL
);
ALTER TABLE
    "market" ADD PRIMARY KEY("id");
CREATE TABLE "market_date"(
    "id" SERIAL,
    "market_id" BIGINT NOT NULL,
    "date_id" BIGINT NOT NULL
);
ALTER TABLE
    "market_date" ADD PRIMARY KEY("id");
CREATE TABLE "user_liked_markets"(
    "id" SERIAL,
    "user_id" BIGINT NOT NULL,
    "market_id" BIGINT NOT NULL
);
ALTER TABLE
    "user_liked_markets" ADD PRIMARY KEY("id");
CREATE TABLE "vendor_date"(
    "id" SERIAL,
    "vendor_id" BIGINT NOT NULL,
    "date_id" BIGINT NOT NULL
);
ALTER TABLE
    "vendor_date" ADD PRIMARY KEY("id");
CREATE TABLE "dates"(
    "id" SERIAL,
    "date" DATE NOT NULL
);
ALTER TABLE
    "dates" ADD PRIMARY KEY("id");
CREATE TABLE "user_liked_vendors"(
    "id" SERIAL,
    "user_id" BIGINT NOT NULL,
    "vendor_id" BIGINT NOT NULL
);
ALTER TABLE
    "user_liked_vendors" ADD PRIMARY KEY("id");

CREATE TABLE "vendor"(
    "id" SERIAL,
    "vendor_name" VARCHAR(50) NOT NULL,
    "vendor_type" VARCHAR(25) NOT NULL,
    "vendor_description" VARCHAR(500) NOT NULL,
    "facebook_link" VARCHAR(100),
    "twitter_link" VARCHAR(100),
    "instagram_link" VARCHAR(100)
);
ALTER TABLE
    "vendor" ADD PRIMARY KEY("id");
CREATE TABLE "market_vendor"(
    "id" SERIAL,
    "market_id" BIGINT NOT NULL,
    "vendor_id" BIGINT NOT NULL
);
ALTER TABLE
    "market_vendor" ADD PRIMARY KEY("id");
ALTER TABLE
    "market_vendor" ADD CONSTRAINT "market_vendor_market_id_foreign" FOREIGN KEY("market_id") REFERENCES "market"("id");
ALTER TABLE
    "market_date" ADD CONSTRAINT "market_date_date_id_foreign" FOREIGN KEY("date_id") REFERENCES "dates"("id");
ALTER TABLE
    "user_liked_vendors" ADD CONSTRAINT "user_liked_vendors_vendor_id_foreign" FOREIGN KEY("vendor_id") REFERENCES "vendor"("id");
ALTER TABLE
    "user_liked_markets" ADD CONSTRAINT "user_liked_markets_market_id_foreign" FOREIGN KEY("market_id") REFERENCES "market"("id");
ALTER TABLE
    "market_date" ADD CONSTRAINT "market_date_market_id_foreign" FOREIGN KEY("market_id") REFERENCES "market"("id");
ALTER TABLE
    "user_liked_markets" ADD CONSTRAINT "user_liked_markets_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("id");
ALTER TABLE
    "vendor_date" ADD CONSTRAINT "vendor_date_vendor_id_foreign" FOREIGN KEY("vendor_id") REFERENCES "vendor"("id");
ALTER TABLE
    "vendor_date" ADD CONSTRAINT "vendor_date_date_id_foreign" FOREIGN KEY("date_id") REFERENCES "dates"("id");
ALTER TABLE
    "market_vendor" ADD CONSTRAINT "market_vendor_vendor_id_foreign" FOREIGN KEY("vendor_id") REFERENCES "vendor"("id");
ALTER TABLE
    "user_liked_vendors" ADD CONSTRAINT "user_liked_vendors_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("id");

-- CREATE TABLE "user" (
--   id SERIAL NOT NULL,
--   first_name VARCHAR(50) NOT NULL,
--   last_name VARCHAR(50) NOT NULL,
--   email VARCHAR(62) NOT NULL,
--   phone VARCHAR(15) NOT NULL,
--   username VARCHAR(50) NOT NULL,
--   password_hash VARCHAR(255) NOT NULL,
--   UNIQUE(email, phone, username)
-- );

-- CREATE TABLE market (
--   id SERIAL NOT NULL,
--   market_name VARCHAR(50) NOT NULL,
--   market_type CHAR(6) NOT NULL,
--   street VARCHAR(20) NOT NULL,
--   city CHAR(20) NOT NULL,
--   state_ CHAR(2) NOT NULL,
--   zip_code INT NOT NULL
-- );

-- CREATE TABLE vendor (
--   id SERIAL NOT NULL,
--   vendor_name VARCHAR(50) NOT NULL,
--   vendor_type VARCHAR(25) NOT NULL,
--   vendor_description VARCHAR(500) NOT NULL,
--   facebook_link VARCHAR(100) NOT NULL,
--   twitter_link VARCHAR(100) NOT NULL,
--   instagram_link VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE date (
--   id SERIAL NOT NULL,
--   date_ DATE NOT NULL
-- );

-- CREATE TABLE market_vendor (
--   id SERIAL NOT NULL,
--   market_id INT NOT NULL,
--   vendor_id INT NOT NULL,
--   FOREIGN KEY (market_id)
-- );

-- CREATE TABLE market_date (
--   id SERIAL NOT NULL,
--   market_id INT NOT NULL,
--   date_id INT NOT NULL
--   -- FOREIGN KEY (market_id, date_id)
-- );

-- CREATE TABLE vendor_date (
--   id SERIAL NOT NULL,
--   vendor_id INT NOT NULL,
--   date_id INT NOT NULL
--   -- FOREIGN KEY (market_id, date_id)
-- );

-- CREATE TABLE user_market (
--   id SERIAL NOT NULL,
--   user_id INT NOT NULL,
--   market_id INT NOT NULL
--   -- FOREIGN KEY (user_id, market_id)
-- );

-- CREATE TABLE user_vendor (
--   id SERIAL NOT NULL,
--   user_id INT NOT NULL,
--   vendor_id INT NOT NULL
--   -- FOREIGN KEY (user_id, vendor_id)
-- );

