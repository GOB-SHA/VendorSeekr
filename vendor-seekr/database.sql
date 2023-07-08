CREATE DATABASE vendorSeekr;

CREATE TABLE user (
  id SERIAL NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(62) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
  UNIQUE(email, phone, username)
);

CREATE TABLE market (
  id SERIAL NOT NULL,
  market_name VARCHAR(50) NOT NULL,
  market_type CHAR(6) NOT NULL,
  street VARCHAR(20) NOT NULL,
  city CHAR(20) NOT NULL,
  state_ CHAR(2) NOT NULL,
  zip_code INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE vendor (
  id SERIAL NOT NULL,
  vendor_name VARCHAR(50) NOT NULL,
  vendor_type VARCHAR(25) NOT NULL,
  vendor_description VARCHAR(500) NOT NULL,
  facebook_link VARCHAR(100) NOT NULL,
  twitter_link VARCHAR(100) NOT NULL,
  instagram_link VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE date (
  id SERIAL NOT NULL,
  date_ DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE market_vendor (
  id SERIAL NOT NULL,
  market_id INT NOT NULL,
  vendor_id INT NOT NULL,
  PRIMARY KEY (id)
  CONSTRAINT 
  -- FOREIGN KEY (market_id)
);

CREATE TABLE market_date (
  id SERIAL NOT NULL,
  market_id INT NOT NULL,
  date_id INT NOT NULL,
  PRIMARY KEY (id),
  -- FOREIGN KEY (market_id, date_id)
);

CREATE TABLE vendor_date (
  id SERIAL NOT NULL,
  vendor_id INT NOT NULL,
  date_id INT NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (market_id, date_id)
);

CREATE TABLE user_market (
  id SERIAL NOT NULL,
  user_id INT NOT NULL,
  market_id INT NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (user_id, market_id)
);

CREATE TABLE user_vendor (
  id SERIAL NOT NULL,
  user_id INT NOT NULL,
  vendor_id INT NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (user_id, vendor_id)
);

