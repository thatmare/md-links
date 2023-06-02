// fxs para fx mdlinks

const fs = require('fs'); // file system
const path = require('node:path');
const pathInput = process.argv[2];

const isPathAbsolute = (pathInput) => { // output es un booleano: true si es absoluta, false si es relativa
    return path.isAbsolute(pathInput);
};

const pathToAbsolute = (pathInput) => { // input es ruta relativa, output es la ruta absoluta en string
    return path.resolve(pathInput);
};

console.log(fs.existsSync(pathInput))

module.exports = {
    isPathAbsolute,
    pathToAbsolute,
}
