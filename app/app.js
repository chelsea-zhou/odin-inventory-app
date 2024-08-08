const express = require("express");
const photoController = require("../controllers/photoController");
const themeController = require("../controllers/themeController");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", themeController.getThemes);

app.post("/", themeController.createTheme);

app.put("/themes/:theme_id", themeController.updateTheme);

app.delete("/themes/:theme_id", themeController.deleteTheme);

app.get("/themes/:theme_id", photoController.getPhotos);

app.get("/themes/:theme_id/photos/:photo_id", photoController.getPhoto);

app.post("/themes/:theme_id", photoController.addPhoto);

app.put("/themes/:theme_id/photos/:photo_id", photoController.updatePhoto);

app.delete("/themes/:theme_id/photos/:photo_id", photoController.deletePhoto);



app.listen(3000);