const db = require("../db/queries");

async function getThemes(req, res) {
    const themes = await db.getThemes();
    res.render("themes", {themes: themes});
}

async function getTheme(req, res) {
    const id = req.params.theme_id;
    const theme = await db.getTheme(id);
}

async function createTheme(req, res) {
    await db.createTheme();
}

async function updateTheme(req, res) {
    await db.updateTheme();
}

async function deleteTheme(req, res) {
    await db.deleteTheme();
}

module.exports = {
    getThemes,
    createTheme,
    updateTheme,
    deleteTheme
}