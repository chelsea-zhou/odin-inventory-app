const db = require("../db/queries");

async function getPhotos(req, res) {
    const theme_id = req.params.theme_id;
    console.log(`get photos params: ${JSON.stringify(req.params)}`);
    const theme = await db.getTheme(theme_id);
    const photos = await db.getPhotos(theme_id);
    res.render("photos", {theme: theme, photos: photos});
}

async function getPhoto(req, res) {
    const photo_id = req.params.photo_id;
    console.log(`get photo photo_id param is ${photo_id}`);
    const photo = await db.getPhoto(photo_id);
    res.render("photoDetails", {photo: photo});
}

async function getUpdatePhoto(req, res) {
    const photo_id = req.params.photo_id;
    const photo = await db.getPhoto(photo_id);
    res.render("updatePhoto", {photo: photo});
}

async function addPhoto(req, res) {
    const theme_id = req.params.theme_id;
    const body = req.body;
    console.log(`add photo request is ${JSON.stringify(body)}`);
    const photoObj = {
        title: body.image_title,
        description: body.image_description,
        location: body.image_location,
        date: body.image_date,
        image: body.image,
        theme_id: theme_id
    };
    await db.addPhoto(photoObj);
    res.redirect(`/themes/${theme_id}`);
}

async function updatePhoto(req, res) {
    const theme_id = req.params.theme_id;
    const photo_id = req.params.photo_id;
    const body = req.body;
    console.log(`update photos with ${JSON.stringify(req.body)}`);
    const updateReq = {
        title: body.title,
        description: body.description,
        location: body.location,
        date: body.date,
        image: body.image,
        id: photo_id
    }
    await db.updatePhoto(updateReq);
    res.redirect(`/themes/${theme_id}/photos/${photo_id}`);
}

async function deletePhoto(req, res) {
    const theme_id = req.params.theme_id;
    const deleteReq = {
        id: req.params.photo_id
    }
    await db.deletePhoto(deleteReq);
    res.redirect(`/themes/${theme_id}`);
}

async function deletePhotosByTheme(id) {
    await db.deletePhotosByTheme(id);
}

module.exports = {
    getPhotos,
    getPhoto,
    getUpdatePhoto,
    addPhoto,
    updatePhoto,
    deletePhoto
}