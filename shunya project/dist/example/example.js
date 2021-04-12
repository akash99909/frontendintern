"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
var react_1 = __importStar(require("react"));
var css_1 = require("@emotion/css");
var __1 = require("..");
function Example() {
    var _a = react_1.useState(), ref = _a[0], setRef = _a[1];
    return react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null,
            react_1.default.createElement("pre", null, "react-text-selection-popover")),
        react_1.default.createElement("p", null, "This is an example using react-text-selection-popover"),
        react_1.default.createElement("p", { ref: function (el) { return el != null && setRef(el); } }, "Select any text here and you'll see what I mean"),
        react_1.default.createElement("p", null,
            react_1.default.createElement("pre", null, "<Popover\n  render={\n    ({ clientRect, isCollapsed, textContent }) => {\n      if (clientRect == null || isCollapsed) return null\n\n      const style = css`\n        position: absolute;\n        left: ${clientRect.left + clientRect.width / 2}px;\n        top: ${clientRect.top - 40}px;\n        margin-left: -75px;\n        width: 150px;\n        background: blue;\n        font-size: 0.7em;\n        pointer-events: none;\n        text-align: center;\n        color: white;\n        border-radius: 3px;\n      `\n\n      return <div className={style}>\n        Selecting {(textContent || '').length} characters\n      </div>\n    }\n  }\n/>")),
        react_1.default.createElement(__1.Popover, { target: ref, render: function (_a) {
                var clientRect = _a.clientRect, isCollapsed = _a.isCollapsed, textContent = _a.textContent;
                if (clientRect == null || isCollapsed)
                    return null;
                var style = css_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            position: absolute;\n            left: ", "px;\n            top: ", "px;\n            margin-left: -75px;\n            width: 150px;\n            background: blue;\n            font-size: 0.7em;\n            pointer-events: none;\n            text-align: center;\n            color: white;\n            border-radius: 3px;\n          "], ["\n            position: absolute;\n            left: ", "px;\n            top: ", "px;\n            margin-left: -75px;\n            width: 150px;\n            background: blue;\n            font-size: 0.7em;\n            pointer-events: none;\n            text-align: center;\n            color: white;\n            border-radius: 3px;\n          "])), clientRect.left + clientRect.width / 2, clientRect.top - 40);
                return react_1.default.createElement("div", { className: style },
                    "Selecting ",
                    (textContent || '').length,
                    " characters");
            } }));
}
exports.Example = Example;
var templateObject_1;