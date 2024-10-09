const fs = require('fs');
const path = require('path');

const getImageBase64 = (imagesFolderPath) => {
    const images = fs.readdirSync(imagesFolderPath);
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const image = fs.readFileSync(path.join(imagesFolderPath, randomImage));
    const base64Image = new Buffer.from(image).toString('base64');

    return base64Image;
}

module.exports = getImageBase64;