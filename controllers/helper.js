const fetch = require('node-fetch');

function sendDeleteThemeRequest(id) {
    fetch(`http://localhost:3000/themes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
module.exports = {
    sendDeleteThemeRequest
}