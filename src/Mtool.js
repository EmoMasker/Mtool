"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var debounce_1 = __importDefault(require("./astrict/debounce"));
var throttle_1 = __importDefault(require("./astrict/throttle"));
var Mtool = {
    debounce: debounce_1.default,
    throttle: throttle_1.default,
};
exports.default = Mtool;
