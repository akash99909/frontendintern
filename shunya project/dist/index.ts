"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = void 0;
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var use_text_selection_1 = require("use-text-selection");
function Portal(props) {
    return react_dom_1.createPortal(props.children, props.mount || document.body);
}
function Popover(props) {
    var Render = props.render;
    var textSelectionProps = use_text_selection_1.useTextSelection(props.target);
    return react_1.default.createElement(Portal, { mount: props.mount },
        react_1.default.createElement(Render, __assign({}, textSelectionProps)));
}
exports.Popover = Popover;