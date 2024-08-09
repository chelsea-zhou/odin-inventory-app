const db = require("../db/queries");

async function getPhotos(req, res) {
    const theme_id = req.params.theme_id;
    console.log(`params: ${JSON.stringify(req.params)}`);
    const theme = await db.getTheme(theme_id);
    const photos = await db.getPhotos(theme_id);
    res.render("photos", {theme: theme, photos: photos});
}

async function getPhoto(req, res) {
    const photo_id = req.params.photo_id;
    console.log(`photo_id param is ${photo_id}`);
    const photo = await db.getPhoto(photo_id);
    res.render("photoDetails", {photo: photo});
}

async function addPhoto(req, res) {
    const theme_id = req.params.theme_id;
    const body = req.body;
    console.log(`post request is ${JSON.stringify(body)}`);
    const photoObj = {
        title: body.image_title,
        description: body.image_description,
        location: body.image_location,
        date: body.image_date,
        image: body.image,
        theme_id: theme_id
    };
    await db.addPhoto(photoObj);
    res.redirect('/');
}

async function updatePhoto(req, res) {
    await db.updatePhoto();
}

async function deletePhoto(req, res) {
    await db.deletePhoto();
}

async function deletePhotosByTheme(id) {
    await db.deletePhotosByTheme(id);
}

module.exports = {
    getPhotos,
    getPhoto,
    addPhoto,
    updatePhoto,
    deletePhoto
}