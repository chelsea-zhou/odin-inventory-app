const pool = require("./pool");

async function getThemes() {
    const {rows} = await pool.query("SELECT * FROM themes");
    return rows;
}

async function createTheme() {

}

async function updateTheme() {

}

async function deleteTheme() {

}

async function getPhotos() {
    const {rows} = await pool.query("SELECT * FROM photos");
    return rows;
}

async function getPhoto(id) {
    const {rows} = await pool.query(`SELECT * FROM photos WHERE id=${id}`);
    if (rows.length > 0) {

        return rows[0];
    }
}

async function addPhoto() {

}

async function updatePhoto() {

}

async function deletePhoto() {

}

module.exports = {
    getThemes,
    createTheme,
    updateTheme,
    deleteTheme,
    getPhotos,
    getPhoto,
    addPhoto,
    updatePhoto,
    deletePhoto
}