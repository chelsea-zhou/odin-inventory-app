const db = require("../db/queries");

async function getThemes(req, res) {
    const themes = await db.getThemes();
    res.send(`themes` + themes.map((theme) => theme.title).join(","));
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