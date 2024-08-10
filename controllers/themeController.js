const db = require("../db/queries");

async function getThemes(req, res) {
    const themes = await db.getThemes();
    res.render("themes", {themes: themes});
}

async function getUpdateTheme(req, res) {
    const theme_id = req.params.theme_id;
    const theme = await db.getTheme(theme_id);
    res.render("updateTheme", {theme: theme});
}

async function createTheme(req, res) {
    const body = req.body;
    console.log(`create theme body is ${JSON.stringify(body)}`);
    const themeObject = {
        title: body.title,
        description: body.description,
        cover_image: body.cover_image
    };
    const theme_id = await db.createTheme(themeObject);
    const photoObj = {
        title: body.image_title,
        description: body.image_description,
        location: body.image_location,
        date: body.image_date,
        image: body.cover_image,
        theme_id: theme_id
    };
    await db.addPhoto(photoObj);
    res.redirect('/');
}

async function updateTheme(req, res) {
    console.log(`update theme with ${JSON.stringify(req.body)}`)
    const theme_id = req.params.theme_id;
    const body = req.body;
    const updateReq = {
        id: theme_id,
        title: body.title,
        description: body.description
    };
    await db.updateTheme(updateReq);
    res.redirect(`/themes/${theme_id}`);
}

async function deleteTheme(req, res) {
    const theme_id = req.params.theme_id;
    console.log(`delete theme ${theme_id}`);
    await db.deleteTheme(theme_id);
    await db.deletePhotosByTheme(theme_id);
    res.redirect('/');
}

module.exports = {
    getThemes,
    getUpdateTheme,
    createTheme,
    updateTheme,
    deleteTheme
}