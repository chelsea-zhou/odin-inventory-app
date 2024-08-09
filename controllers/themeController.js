const db = require("../db/queries");

async function getThemes(req, res) {
    const themes = await db.getThemes();
    res.render("themes", {themes: themes});
}

async function createTheme(req, res) {
    const body = req.body;
    console.log(`body is ${JSON.stringify(body)}`);
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
    const theme_id = req.params.theme_id;
    const themeObj = req.params.theme;
    await db.updateTheme(theme_id, themeObj);
    res.redirect('/');
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
    createTheme,
    updateTheme,
    deleteTheme
}