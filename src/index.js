import {generateRandomLat, generateRandomLang} from "./modules/coordinates";
export const generateRandomCoordinate = () => {
    return {
        latitude: generateRandomLat(),
        longitude: generateRandomLang()
    }
}

export const generateRandomCoordinates = (len = 1) => {
    const arr = [];
    Array(len).fill(1).forEach((item,index)=>{
        arr.push(generateRandomCoordinate())
    })
    return arr;
}