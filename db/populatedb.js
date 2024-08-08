#! /usr/bin/env node

const { Client } = require("pg");

// const SQL = `
// CREATE TABLE IF NOT EXISTS themes (
//   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   title VARCHAR ( 255 ),
//   description VARCHAR ( 255 ),
//   cover_image VARCHAR ( 255 )
// );

// INSERT INTO themes (title, description, cover_image) 
// VALUES
//   ('Pride Day', '2024 August 4th Vancouver pride day', './assets/pride')
// `;
const date1 = new Date();
const PHOTO_SQL = `
CREATE TABLE IF NOT EXISTS photos (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 255 ),
  description VARCHAR ( 255 ),
  image VARCHAR ( 255 ),
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  location VARCHAR ( 255 )
);

INSERT INTO photos (title, description, image, date, location) 
VALUES
  ('in the crowd', 'a couple in celebrities club', './assets/couple.jpg', '2024-08-08 19:34:56', 'Vancouver celebrities club')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://chenshuzhou:Ulquiorra4!@localhost:5432/photo_inventory",
  });
  await client.connect();
  await client.query(PHOTO_SQL);
  await client.end();
  console.log("done");
}

main();
