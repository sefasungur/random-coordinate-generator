# @sefasungur/random-coordinate-generator

@sefasungur/random-coordinate-generator is a NodeJs library for dealing with text processing.

## Installation

Use the package manager [npm](https://npmjs.com/@sefasungur/random-coordinate-generator) to install @sefasungur/random-coordinate-generator

```bash
npm install @sefasungur/random-coordinate-generator
```

## Usage

```javascript
const coordinates = require("./build/index");
const {generateRandomCoordinate, generateRandomCoordinates} = coordinates;
console.log(generateRandomCoordinate());
console.log(coordinates.generateRandomCoordinates(10));
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)