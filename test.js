const coordinates = require("./build/index");
const {generateRandomCoordinate, generateRandomCoordinates} = coordinates;
console.log(generateRandomCoordinate());
console.log(coordinates.generateRandomCoordinates(10));