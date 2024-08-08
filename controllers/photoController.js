const db = require("../db/queries");

async function getPhotos(req, res) {
    const photos = await db.getPhotos();
    res.send("photos" + photos.map((photo) => photo.title).join(","));
}

async function getPhoto(req, res) {
    const photo_id = req.params.photo_id;
    console.log(`photo_id param is ${photo_id}`);
    const photo = await db.getPhoto(photo_id);
    res.send("photo" + photo.title);
}

async function addPhoto(req, res) {
    await db.addPhoto();
}

async function updatePhoto(req, res) {
    await db.updatePhoto();
}

async function deletePhoto(req, res) {
    await db.deletePhoto();
}

module.exports = {
    getPhotos,
    getPhoto,
    addPhoto,
    updatePhoto,
    deletePhoto
}