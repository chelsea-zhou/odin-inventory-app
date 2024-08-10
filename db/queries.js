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

async function createTheme(req) {
    const {rows} = await pool.query(`
        INSERT INTO themes (title, description, cover_image) 
        VALUES ($1, $2, $3)
        RETURNING id;
        `, 
        [req.title, req.description, req.cover_image]);
    if (rows.length > 0 ) {
        return rows[0].id
    }
}

async function updateTheme(req) {
    try {
        const sql = `
            UPDATE themes
            SET title = $1, description = $2
            WHERE id = $3
        `
        await pool.query(sql, [req.title, req.description, req.id]);
    } catch (e) {
        console.log(e);
    }
}

async function deleteTheme(id) {
    const sql = `DELETE FROM themes WHERE id = ${id};`
    await pool.query(sql);
}

async function getPhotos(theme_id) {
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

async function addPhoto(obj) {
    const sql = `
    INSERT INTO photos (title, description, image, date, location, theme_id) 
    WHERE 
    `;
    await pool.query(sql, [
        obj.title, 
        obj.description, 
        obj.image, 
        obj.date, 
        obj.location, 
        obj.theme_id
    ]);
}

async function updatePhoto(obj) {
    const sql = `
    UPDATE photos 
    SET title=$1, description=$2, image=$3, date=$4, location=$5 
    WHERE id=$6`;
    await pool.query(sql, [
        obj.title, 
        obj.description, 
        obj.image, 
        obj.date, 
        obj.location,
        obj.id
    ]);
}

async function deletePhoto(deleteReq) {
    const sql = `DELETE FROM photos WHERE id = ${deleteReq.id}`;
    await pool.query(sql);
}

async function deletePhotosByTheme(id) {
    const sql = `DELETE FROM photos WHERE theme_id = ${id};
    `
    await pool.query(sql);
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
    deletePhoto,
    deletePhotosByTheme
}