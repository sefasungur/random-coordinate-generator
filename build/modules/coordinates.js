"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomLat = exports.generateRandomLang = void 0;

var generateRandomLang = function generateRandomLang() {
  var num = parseFloat((Math.random() * 180).toFixed(3));
  var posorneg = Math.random();

  if (posorneg >= 0.5) {
    num = num * -1;
  }

  return num;
};

exports.generateRandomLang = generateRandomLang;

var generateRandomLat = function generateRandomLat() {
  var num = parseFloat((Math.random() * 90).toFixed(3));
  var posorneg = Math.random();

  if (posorneg >= 0.5) {
    num = num * -1;
  }

  return num;
};

exports.generateRandomLat = generateRandomLat;