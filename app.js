const express = require("express");
const path = require('path');
const photoController = require("./controllers/photoController");
const themeController = require("./controllers/themeController");

const app = express();
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get("/", themeController.getThemes);

app.get("/themes/new", (req, res) => {
    res.render("createTheme", {});
});
app.post("/themes/new", themeController.createTheme);

app.get("/themes/:theme_id/update", themeController.getUpdateTheme);

app.post("/themes/:theme_id/update", themeController.updateTheme);

app.get("/themes/:theme_id/delete", themeController.deleteTheme);

app.get("/themes/:theme_id", photoController.getPhotos);

app.get("/themes/:theme_id/photos/:photo_id", photoController.getPhoto);

app.get("/themes/:theme_id/photos/:photo_id/update", photoController.getUpdatePhoto);

app.get("/themes/:theme_id/photos/:photo_id/delete", photoController.deletePhoto);

app.get("/themes/:theme_id/newPhoto", (req, res) => {
    res.render("newPhoto", {theme_id: req.params.theme_id})
});
app.post("/themes/:theme_id/newPhoto", photoController.addPhoto);

// this is post not put because html <form> can only do post
app.post("/themes/:theme_id/photos/:photo_id/update", photoController.updatePhoto);


app.listen(3000);