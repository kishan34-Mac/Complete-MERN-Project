const ImageKit = require("imagekit");  // Use capital K consistently
require('dotenv').config();
console.log('Public Key:', process.env.IMAGEKIT_PUBLIC_KEY);

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file, fileName) {
    const result = await imagekit.upload({
        file: file,
        fileName: fileName
    });
    return result;
}

module.exports = { uploadFile };
