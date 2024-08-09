const pool = require("./pool");

async function getThemes() {
    const {rows} = await pool.query("SELECT * FROM themes");
    return rows;
}

async function getTheme(id) {
    const {rows} = await pool.query(`SELECT * FROM themes WHERE id = ${id}`);
    if (rows.length > 0) {
        return rows[0];
    }
}

async function createTheme() {

}

async function updateTheme() {

}

async function deleteTheme() {

}

async function getPhotos(theme_id) {
    console.log(theme_id)
    const sqlStatement = `SELECT * FROM photos WHERE theme_id = ${theme_id}`;
    const {rows} = await pool.query(sqlStatement);
    return rows;
}

// no validation for input
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
    getTheme,
    createTheme,
    updateTheme,
    deleteTheme,
    getPhotos,
    getPhoto,
    addPhoto,
    updatePhoto,
    deletePhoto
}