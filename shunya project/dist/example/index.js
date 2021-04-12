"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
require("./index.css");
// @ts-ignore
var typography_1 = __importDefault(require("typography"));
var example_1 = require("./example");
var typography = new typography_1.default({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: ['sans-serif'],
    bodyFontFamily: ['sans-serif'],
});
typography.injectStyles();
react_dom_1.render(react_1.default.createElement(example_1.Example, null), document.getElementById('root'));